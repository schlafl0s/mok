import s from "/styles/Home.module.scss"
import { useState } from 'react';

export default function AppointmentPopup ({ popupOpen, setPopupOpen }) {
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
        <>
        {popupOpen && (
            <>
            <div onClick={() => setPopupOpen(false)} className={s.blackBackground}></div>
            <div className={s.appointmentPopup}>
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
                <button onClick={() => setPopupOpen(false)} className={s.closePopup}>
                    <svg className={s.closePopupIcon} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.661133 18.8389L18.3388 1.1612" stroke="#29292C"/>
                        <path d="M18.3389 18.8389L0.661198 1.1612" stroke="#29292C"/>
                    </svg>
                </button>
            </div>
            </>
        )}
        </>
    )
}