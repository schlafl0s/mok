import { useState, useEffect } from 'react';
import s from '/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Appointment() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [appointmentImgUrl, setAppointmentImgUrl] = useState('');
  const [mouseOn, setMouseOn] = useState(false)
  const router = useRouter();

  // Функция для получения данных страницы (с ID для изображения appointmentImg)
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/561`);
        const data = await response.json();

        const appointmentImgId = data.acf?.images?.appointmentImg; // ID изображения appointmentImg

        if (appointmentImgId) {
          // Запрашиваем данные по медиафайлу с этим ID
          const imgResponse = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/media/${appointmentImgId}`);
          const imgData = await imgResponse.json();

          if (imgData.source_url) {
            setAppointmentImgUrl(imgData.source_url); // Устанавливаем URL изображения
          } else {
            console.error('Не удалось найти URL изображения');
          }
        } else {
          console.error('ID изображения не найден');
        }
      } catch (error) {
        console.error('Ошибка при получении данных страницы:', error);
      }
    };

    fetchPageData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await fetch('/api/sendToTelegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      const result = await response.json();

      if (response.ok) {
        setName('');
        setPhone('');
        router.push('/thanks');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Убираем все символы, кроме цифр
    value = value.replace(/[^\d]/g, '');

    // Применяем маску для телефона +7 (999) 999-99-99
    let formattedValue = value;

    if (value.length === 0) {
      setPhone('');
      return;
    }

    formattedValue = '+7';
    if (value.length > 1) {
      formattedValue += ` (${value.slice(1, 4)}`;
    }
    if (value.length > 4) {
      formattedValue += `) ${value.slice(4, 7)}`;
    }
    if (value.length > 7) {
      formattedValue += `-${value.slice(7, 9)}`;
    }
    if (value.length > 9) {
      formattedValue += `-${value.slice(9, 11)}`;
    }

    setPhone(formattedValue);
  };

  return (
    <section className={`${s.appointment} ${s.appointmentMedia}`}>
      <div className={s.appointmentImgContainer}>
        {/* Используем полученный URL изображения */}
        {appointmentImgUrl && (
          <Image
            className={s.appointmentImg}
            src={appointmentImgUrl} // Здесь подставляем URL
            width={2000}
            height={2000}
            alt="Appointment Image"
          />
        )}
      </div>
      <div onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)} className={s.makeAppointment}>
        <Image
          style={mouseOn ? { transform: 'rotate(180deg)', transition: '0.3s' } : {}}
          className={s.greenArrow}
          src={'/greenArrow.png'}
          width={77}
          height={77}
        />
        <h2 className={s.makeAppointmentHeader}>Запишитесь онлайн</h2>
        <span className={s.makeAppointmentText}>Оставьте контакты, наш администратор свяжется с вами и запишет на удобную дату</span>
        <form className={s.appointmentForm}>
          <input
            className={submitted && !name ? s.appointmentError : s.appointmentInput}
            placeholder="Введите имя"
            value={name}
            onChange={handleNameChange}
          />
          <input
            className={submitted && !phone ? s.appointmentError : s.appointmentInput}
            placeholder="Введите телефон"
            value={phone}
            onChange={handlePhoneChange}
          />
          <button type="submit" onClick={handleSubmit} className={`${s.button5} ${s.buttonMat5} ${s.btn5} ${s.btn5media}`}>
            Записаться
          </button>
          <Link href={'/user-agreement'} className={s.appointmentAgree}>
            Нажимая кнопку, вы даете согласие на обработку персональных данных
          </Link>
        </form>
      </div>
    </section>
  );
}
