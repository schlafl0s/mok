import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function Consultation () {
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
                    <input className={s.appointmentInput} placeholder='Введите имя' />
                    <input className={s.appointmentInput} placeholder='Введите телефон' />
                    <button type='submit' className={`${s.button5} ${s.buttonMat5} ${s.btn5}`}>Записаться</button>
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