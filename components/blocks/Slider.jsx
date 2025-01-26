import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Slider({ setPopupOpen, slideInfo }) {
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


  // const slides = [
  //   { 
  //     id: 1, 
  //     image: '/underHeaderBackground.png', 
  //     header: 'Центр хирургии МОК клиники',
  //     options: [
  //       { id: 1, text: '7 хирургических центров: экстренная и плановая хирургия' },
  //       { id: 2, text: 'Стационары для взрослых и детей' },
  //       { id: 3, text: 'Собственная служба скорой помощи' },
  //       { id: 4, text: 'Консультация хирурга бесплатно' }
  //     ]
  //   },
  //   { 
  //     id: 2, 
  //     image: '/underHeaderBackground.png', 
  //     header: 'Стационары для взрослых и детей',
  //     options: [
  //       { text: 'Многофункциональные диагностические и лечебные системы' },
  //       { text: 'Инновационные подходы к лечению' }
  //     ]
  //   }
  // ];

  const slides = slideInfo.slides

  function Slide({ slide }) {
    return (
    <div className={s.slide}>
        <div className={s.slideInfo}>
          <h1 className={s.slideHeader}>{slide.header}</h1> 
          <div className={s.descriptionContainer}>
            {slide.description.map((des, index) => (
              <div key={index} className={s.description}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" strokeWidth="0.865725" />
                  <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" strokeWidth="0.865725" />
                  <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" strokeWidth="0.865725" />
                </svg>
                <span className={s.des}>{des.text}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setPopupOpen(true)} className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>Записаться на прием</button>
        </div>
        <picture>
          <source media="(max-width: 728px)" srcSet="/underHeaderBackgroundPhone.png" />
          <source media="(min-width: 729px)" srcSet={slide.image} />
          <Image className={s.underHeaderBackground} src={slide.image} width={2000} height={2000} />
        </picture>
        {/* <Image className={s.XUH} src={'/X.png'} width={100} height={100} /> */}
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