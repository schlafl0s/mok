import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Consultation () {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true)
    
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
    }

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
        <section className={s.appointment}>
            <div className={s.makeAppointment2}>
                <Image
                className={s.greenArrow}
                src={'/greenArrow.png'}
                width={77}
                height={77}
                />
                <h2 className={s.makeAppointmentHeader2}>Бесплатная консультация специалиста</h2>
                <span className={s.makeAppointmentText2}>Оставьте контакты, наш администратор свяжется с вами и проконсультирует по всем вопросам</span>
                <form className={s.appointmentForm}>
                    <input
                    className={submitted && !name ? s.appointmentError : s.appointmentInput}
                    placeholder='Введите имя'
                    value={name}
                    onChange={handleNameChange}
                    />
                    <input
                    className={submitted && !phone ? s.appointmentError : s.appointmentInput}
                    placeholder='Введите телефон'
                    value={phone}
                    onChange={handlePhoneChange}
                    />
                    <button type='submit' onClick={handleSubmit} className={`${s.button5} ${s.buttonMat5} ${s.btn5}`}>Записаться</button>
                    <span className={s.appointmentAgree}>Нажимая кнопку, вы даете согласие на обработку персональных данных</span>
                </form>
            </div>
            <div className={s.appointmentImgContainer}>
                <Image
                className={s.appointmentImg}
                src={'/consultation.png'}
                width={1000}
                height={1000}
                />
            </div>
        </section>
    )
}