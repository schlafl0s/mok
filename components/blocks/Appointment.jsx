import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function Appointment () {
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
                    <input className={s.appointmentInput} placeholder='Введите имя' />
                    <input className={s.appointmentInput} placeholder='Введите телефон' />
                    <button type='submit' className={`${s.button5} ${s.buttonMat5} ${s.btn5}`}>Записаться</button>
                    <span className={s.appointmentAgree}>Нажимая кнопку, вы даете согласие на обработку персональных данных</span>
                </form>
            </div>
        </section>
    )
}