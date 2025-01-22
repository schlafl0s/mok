import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Specialists ({ setPopupOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = (direction) => {
    if (isAnimating) return; // Если анимация идет, не делаем ничего
    setIsAnimating(true);

    setFade(false); // Начинаем анимацию исчезновения
    setTimeout(() => {
      setCurrentGroupIndex((prevIndex) => {
        const newIndex = prevIndex + direction;
        // Ограничение индекса, чтобы не выйти за пределы массива
        return Math.max(0, Math.min(Math.floor(specialistsData.length / 3), newIndex));
      });
      setIsAnimating(false);
    }, 300); // Ждем завершения анимации исчезновения
  };

  const handleSwitchPhone = (direction) => {
    if (isAnimating) return; // Если анимация идет, не делаем ничего
    setIsAnimating(true);
  
    setFade(false); // Начинаем анимацию исчезновения
  
    // Ждем завершения анимации исчезновения
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + direction;
        return Math.max(0, Math.min(specialistsData.length - 1, newIndex));
      });
  
      setFade(true); // Включаем анимацию появления
      setIsAnimating(false); // Завершаем анимацию
    }, 300); // Это время соответствует длительности анимации исчезновения
  };

  // Функция для получения 3 специалистов для текущей группы
  const getSpecialistsForCurrentGroup = () => {
    const startIndex = currentGroupIndex * 3;
    return specialistsData.slice(startIndex, startIndex + 3);
  };
  
  const getSpecialistForCurrentIndex = () => {
    return specialistsData[currentIndex];
  };

  const specialistsData = [
    {
      img: '/specialist.png',
      experience: '5 лет',
      name: 'Иванов Иван Иванович',
      option1: 'Терапевт',
      option2: 'Кандидат медицинских наук',
      option3: 'Врач высшей категории',
    },
    {
      img: '/specialist.png',
      experience: '10 лет',
      name: 'Петрова Екатерина Александровна',
      option1: 'Хирург',
      option2: 'Доктор медицинских наук',
      option3: 'Профессор',
    },
    {
      img: '/specialist.png',
      experience: '3 года',
      name: 'Сергеева Екатерина Александровна',
      option1: 'Гинеколог',
      option2: 'Ведущий врач',
      option3: 'Кандидат медицинских наук, врач высшей категории',
    },
    {
      img: '/specialist.png',
      experience: '6 лет',
      name: 'Кузнецов Алексей Михайлович',
      option1: 'Терапевт',
      option2: 'Врач первой категории',
      option3: 'Кандидат медицинских наук',
    },
    {
      img: '/specialist.png',
      experience: '8 лет',
      name: 'Александрова Ольга Сергеевна',
      option1: 'Педиатр',
      option2: 'Врач высшей категории',
      option3: 'Доктор медицинских наук',
    },
    {
      img: '/specialist.png',
      experience: '4 года',
      name: 'Егорова Юлия Васильевна',
      option1: 'Кардиолог',
      option2: 'Кандидат медицинских наук',
      option3: 'Врач высшей категории',
    },
    {
      img: '/specialist.png',
      experience: '7 лет',
      name: 'Захаров Александр Викторович',
      option1: 'Хирург',
      option2: 'Доцент',
      option3: 'Врач высшей категории',
    },
    {
      img: '/specialist.png',
      experience: '12 лет',
      name: 'Федорова Марина Николаевна',
      option1: 'Невролог',
      option2: 'Профессор',
      option3: 'Кандидат медицинских наук',
    },
    {
      img: '/specialist.png',
      experience: '3 года',
      name: 'Григорьев Павел Викторович',
      option1: 'Офтальмолог',
      option2: 'Врач первой категории',
      option3: 'Специалист по лазерной коррекции',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1); // Ждем немного перед началом анимации
    return () => clearTimeout(timer); // Очищаем таймер
  }, [currentGroupIndex]);
  

  function Specialist ({img, experience, name, option1, option2, option3}) {
    return (
      <div className={s.specialistCard}>
        <div className={s.specialistInfo}>
          <div className={s.experience}>Стаж: {experience}</div>
          <Image
            className={s.specialistImg}
            src={img}
            width={220}
            height={220}
          />
          <div className={s.specialistInfoText}>
            <span className={s.specialistName}>
              {name}
            </span>
            <ul className={s.specialistOptions}>
              <li>{option1}</li>
              <li>{option2}</li>
              <li>{option3}</li>
            </ul>
          </div>
        </div>
        <button onClick={() => setPopupOpen(true)} className={`${s.button1} ${s.buttonMat1} ${s.btn1}`}>Записаться на прием</button>
      </div>
    )
  }

    return (
        <section className={s.specialist}>
            <div className={s.specialsUp}>
                <h1 className={s.Header}>Наши специалисты</h1>
                <div className={s.switcher}>
                    <button disabled={currentGroupIndex === 0} onClick={() => handleSwitch(-1)} className={`${s.switchBtnLeft} ${currentGroupIndex === 0 ? s.switchInactive : ''}`}>
                    <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                    </svg>
                    </button>
                    <button onClick={() => handleSwitch(1)} className={`${s.switchBtnRight} ${currentGroupIndex === Math.floor(specialistsData.length / 3 - 1) ? s.switchInactive : ''}`}
                    disabled={currentGroupIndex === Math.floor(specialistsData.length / 3 - 1)}>
                    <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                    </svg>
                    </button>
                </div>
            </div>
            <div className={`${s.specialistContainer} ${fade ? s.fadeIn : s.fadeOut}`}
            style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}>
              {getSpecialistsForCurrentGroup().map((specialist, index) => (
                <Specialist
                  key={index}
                  img={specialist.img}
                  experience={specialist.experience}
                  name={specialist.name}
                  option1={specialist.option1}
                  option2={specialist.option2}
                  option3={specialist.option3}
                  setPopupOpen={setPopupOpen}
                />
              ))}
            </div>
            <div className={`${s.specialistContainerPhone} ${fade ? s.fadeIn : s.fadeOut}`}
            style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}>
              <Specialist
                key={currentIndex}
                img={getSpecialistForCurrentIndex().img}
                experience={getSpecialistForCurrentIndex().experience}
                name={getSpecialistForCurrentIndex().name}
                option1={getSpecialistForCurrentIndex().option1}
                option2={getSpecialistForCurrentIndex().option2}
                option3={getSpecialistForCurrentIndex().option3}
                setPopupOpen={setPopupOpen}
              />
            </div>
            <div className={s.switcherPhone}>
                <button disabled={currentIndex === 0} onClick={() => handleSwitchPhone(-1)} className={`${s.switchBtnLeft} ${currentIndex === 0 ? s.switchInactive : ''}`}>
                  <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                  </svg>
                </button>
                <button onClick={() => handleSwitchPhone(1)} className={`${s.switchBtnRight} ${currentIndex === Math.floor(specialistsData.length - 1) ? s.switchInactive : ''}`}
                disabled={currentIndex === Math.floor(specialistsData.length - 1)}>
                  <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                  </svg>
                </button>
            </div>
        </section>
    )
}