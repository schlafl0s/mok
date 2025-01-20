import s from "/styles/Home.module.scss"

export default function AppointmentPopup ({ popupOpen, setPopupOpen }) {
    return (
        <>
        {popupOpen && (
            <>
            <div onClick={() => setPopupOpen(false)} className={s.blackBackground}></div>
            <div className={s.appointmentPopup}>
                <h2 className={s.makeAppointmentHeader}>Запишитесь онлайн</h2>
                <span className={s.makeAppointmentText}>Оставьте контакты, наш администратор свяжется с вами и запишет на удобную дату</span>
                <form className={s.appointmentForm}>
                    <input className={s.appointmentInput} placeholder='Введите имя' />
                    <input className={s.appointmentInput} placeholder='Введите телефон' />
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