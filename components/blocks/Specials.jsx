import s from '/styles/Home.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Specials({ setPopupOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = (direction) => {
    if (isAnimating) return; // Если анимация идет, не делаем ничего
    setIsAnimating(true);

    setFade(false); // Начинаем анимацию исчезновения
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + direction;
        return Math.max(0, Math.min(specialsData.length - 1, newIndex)); // Ограничиваем индекс
      });
      setIsAnimating(false);
    }, 300); // Ждем завершения анимации исчезновения
  };

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1); // Ждем немного перед началом анимации
    return () => clearTimeout(timer); // Очищаем таймер
  }, [currentIndex]);

  // Данные для слайдов
  const specialsData = [
    {
      slideId: 1,
      cards: [
        {
          img: '/specialsLeftBackground.png',
          header: 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ ВРАЧА',
          text: 'по поводу операции для взрослых и детей с 1 по 30 ноября',
        },
        {
          img: '/specialsRightBackground1.png',
          header: 'СКИДКА 20%',
          text: 'на гастроскопию и колоноскапию',
        },
        {
          img: '/specialsRightBackground2.png',
          header: 'СКИДКА 20%',
          text: 'на компьютерную томографию',
        },
      ],
    },
    {
      slideId: 2,
      cards: [
        {
          img: '/specialsLeftBackground.png',
          header: 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ ВРАЧА2',
          text: 'по поводу операции для взрослых и детей с 1 по 30 ноября',
        },
        {
          img: '/specialsRightBackground1.png',
          header: 'СКИДКА 15%',
          text: 'на гастроскопию и колоноскапию',
        },
        {
          img: '/specialsRightBackground2.png',
          header: 'СКИДКА 25%',
          text: 'на компьютерную томографию',
        },
      ],
    },
    {
      slideId: 3,
      cards: [
        {
          img: '/specialsLeftBackground.png',
          header: 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ ВРАЧА3',
          text: 'по поводу операции для взрослых и детей с 1 по 30 ноября',
        },
        {
          img: '/specialsRightBackground1.png',
          header: 'СКИДКА 30%',
          text: 'на гастроскопию и колоноскапию',
        },
        {
          img: '/specialsRightBackground2.png',
          header: 'СКИДКА 10%',
          text: 'на компьютерную томографию',
        },
      ],
    },
  ];

  const currentSlide = specialsData[currentIndex];

  return (
    <section className={s.specials}>
      <div className={s.specialsUp}>
        <h1 className={s.Header}>Акции и специальные предложения</h1>
        <div className={s.switcher}>
          <button
            disabled={currentIndex === 0}
            onClick={() => handleSwitch(-1)}
            className={`${s.switchBtnLeft} ${currentIndex === 0 ? s.switchInactive : ''}`}
          >
            <svg
              className={s.switchBtnLeftArrow}
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={() => handleSwitch(1)}
            className={`${s.switchBtnRight} ${
              currentIndex === specialsData.length - 1 ? s.switchInactive : ''
            }`}
            disabled={currentIndex === specialsData.length - 1}
          >
            <svg
              className={s.switchBtnRightArrow}
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${s.specialsBlocks} ${fade ? s.fadeIn : s.fadeOut}`}>
        <div className={s.specialsLeft}>
          <h2 className={s.specialsLeftHeader}>{currentSlide.cards[0].header}</h2>
          <span className={s.specialsLeftText}>{currentSlide.cards[0].text}</span>
          <button onClick={() => setPopupOpen(true)} className={`${s.button3} ${s.buttonMat3} ${s.btn3}`}>
            Получить консультацию
          </button>
          <Image className={s.specialsBackground} src={currentSlide.cards[0].img} width={2000} height={2000} />
        </div>

        <div className={s.specialsRight}>
          <div className={s.specialsSmallBlock1}>
            <h2 className={s.specialsSmallName}>{currentSlide.cards[1].header}</h2>
            <span className={s.specialsSmallText}>{currentSlide.cards[1].text}</span>
            <Image className={s.specialsBackground} src={currentSlide.cards[1].img} width={2000} height={2000} />
          </div>
          <div className={s.specialsSmallBlock2}>
            <h2 className={s.specialsSmallName}>{currentSlide.cards[2].header}</h2>
            <span className={s.specialsSmallText}>{currentSlide.cards[2].text}</span>
            <Image className={s.specialsBackground} src={currentSlide.cards[2].img} width={2000} height={2000} />
          </div>
        </div>
      </div>
      <div className={s.switcherPhone}>
            <button disabled={currentIndex === 0} onClick={() => handleSwitch(-1)} className={`${s.switchBtnLeft} ${currentIndex === 0 ? s.switchInactive : ''}`}>
                <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                </svg>
            </button>
            <button onClick={() => handleSwitch(1)} className={`${s.switchBtnRight} ${currentIndex === Math.floor(specialsData.length - 1) ? s.switchInactive : ''}`}
            disabled={currentIndex === Math.floor(specialsData.length - 1)}>
                <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                </svg>
            </button>
        </div>
    </section>
  );
}
