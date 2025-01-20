import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react'

export default function Slider({ setPopupOpen }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTransition, setCurrentTransition] = useState(0)

  const nextSlide = () => {
    setCurrentTransition((prevTransition) => {
        const newSlide = (currentSlide !== slides.length - 1) ? currentSlide + 1 : 0
        const newTransition = (currentSlide !== slides.length - 1) ? prevTransition - 100 : 0

        setCurrentSlide(newSlide)
        return newTransition
    })
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setCurrentTransition(index * -100)
  }

  useEffect(() => {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
  }, [currentSlide])


  const slides = [
    { id: 1, image: '/underHeaderBackground.png', header: 'Центр хирургии МОК клиники' },
    { id: 2, image: '/underHeaderBackground.png', header: 'Стационары для взрослых и детей' },
    { id: 3, image: '/underHeaderBackground.png', header: 'Собственная служба скорой помощи' },
    { id: 4, image: '/underHeaderBackground.png', header: 'Консультация хирурга бесплатно' },
  ];

  function Slide({ slide, postHeader }) {

    return (
    <div className={s.slide}>
        <div className={s.slideInfo}>
          <h1 className={s.slideHeader}>{postHeader}</h1> 
          <div className={s.descriptionContainer}>
            <div className={s.description}>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" strokeWidth="0.865725" />
                <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" strokeWidth="0.865725" />
                <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" strokeWidth="0.865725" />
              </svg>
              <span className={s.des}>7 хирургических центров: экстренная и плановая хирургия</span>
            </div>
            <div className={s.description}>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" strokeWidth="0.865725" />
                <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" strokeWidth="0.865725" />
                <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" strokeWidth="0.865725" />
              </svg>
              <span className={s.des}>Стационары для взрослых и детей</span>
            </div>
            <div className={s.description}>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" strokeWidth="0.865725" />
                <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" strokeWidth="0.865725" />
                <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" strokeWidth="0.865725" />
              </svg>
              <span className={s.des}>Собственная служба скорой помощи</span>
            </div>
            <div className={s.description}>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" strokeWidth="0.865725" />
                <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" strokeWidth="0.865725" />
                <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" strokeWidth="0.865725" />
              </svg>
              <span className={s.des}>Консультация хирурга по поводу операции – бесплатно </span>
            </div>
          </div>
          <button onClick={() => setPopupOpen(true)} className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>Записаться на прием</button>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcSet="/underHeaderBackgroundPhone.png" />
          <source media="(min-width: 769px)" srcSet={slide.image} />
          <Image className={s.underHeaderBackground} src={slide.image} width={2000} height={2000} />
        </picture>
        <Image className={s.XUH} src={'/X.png'} width={100} height={100} />
        <Image className={s.VUH} src={'/V.png'} width={100} height={100} />
    </div>
    )
  }

  return (
    <section className={s.slider}>
      <div className={s.slides} style={{ transform: `translateX(${currentTransition}%)`}}>
        {slides.map((slide, index) => (
          <Slide key={slide.id} slide={slide} isActive={index === currentSlide} />
        ))}
      </div>
      <div className={s.slideCount}>
        {slides.map((_, index) => (
          <div
            onClick={() => goToSlide(index)}
            key={index}
            className={`${s.slideCounter} ${currentSlide === index ? s.slideCounterActive : ''}`}
          />
        ))}
      </div>
    </section>
  );
}

export async function getServerSideProps (context) {
  const res = await fetch(`http://mok.admin/wp-json/wp/v2/posts`)
  const data = await res.json()
  const postHeader = data[0].title.rendered

  return {
    props: {
      postHeader,
    },
  };
}