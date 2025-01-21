import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState } from 'react';


export default function Appointment () {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
  
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
            <div className={s.appointmentImgContainer}>
                <Image
                className={s.appointmentImg}
                src={'/appointmentImg.png'}
                width={1000}
                height={1000}
                />
            </div>
            <div className={s.makeAppointment}>
                <Image
                className={s.greenArrow}
                src={'/greenArrow.png'}
                width={77}
                height={77}
                />
                <h2 className={s.makeAppointmentHeader}>Запишитесь онлайн</h2>
                <span className={s.makeAppointmentText}>Оставьте контакты, наш администратор свяжется с вами и запишет на удобную дату</span>
                <form className={s.appointmentForm}>
                    <input
                    className={s.appointmentInput}
                    placeholder='Введите имя'
                    value={name}
                    onChange={handleNameChange}
                    />
                    <input
                    className={s.appointmentInput}
                    placeholder='Введите телефон'
                    value={phone}
                    onChange={handlePhoneChange}
                    />
                    <button type='submit' className={`${s.button5} ${s.buttonMat5} ${s.btn5}`}>Записаться</button>
                    <span className={s.appointmentAgree}>Нажимая кнопку, вы даете согласие на обработку персональных данных</span>
                </form>
            </div>
        </section>
    )
}