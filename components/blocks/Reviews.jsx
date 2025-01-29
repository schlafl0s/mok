import s from '/styles/Home.module.scss'
import { useState } from 'react';

export default function Reviews({ reviewsInfo }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSwitch = (direction) => {
      if (isAnimating) return; // Если анимация идет, не делаем ничего
      setIsAnimating(true);
  
      setFade(false); // Начинаем анимацию исчезновения
      setTimeout(() => {
        setCurrentGroupIndex((prevIndex) => {
          const newIndex = prevIndex + direction;
          // Ограничение индекса, чтобы не выйти за пределы массива
          return Math.max(0, Math.min(Math.floor(reviewsInfo.length / 3), newIndex));
        });
        setIsAnimating(false);
        setFade(true)
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
          return Math.max(0, Math.min(reviewsInfo.length - 1, newIndex));
        });
    
        setFade(true); // Включаем анимацию появления
        setIsAnimating(false); // Завершаем анимацию
      }, 300); // Это время соответствует длительности анимации исчезновения
    };
  
    // Функция для получения 3 специалистов для текущей группы
    const getReviewsForCurrentGroup = () => {
      const startIndex = currentGroupIndex * 3;
      return reviewsInfo.slice(startIndex, startIndex + 3);
    };
    
    const getReviewsForCurrentIndex = () => {
      return reviewsInfo[currentIndex];
    };
  
    return (
        <section className={s.reviews}>
            <div className={s.specialsUp}>
                <h1 className={s.Header}>Что говорят пациенты</h1>
                <div className={s.switcher}>
                    <button disabled={currentGroupIndex === 0} onClick={() => handleSwitch(-1)} className={`${s.switchBtnLeft} ${currentGroupIndex === 0 ? s.switchInactive : ''}`}>
                        <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                        </svg>
                    </button>
                    <button onClick={() => handleSwitch(1)} className={`${s.switchBtnRight} ${currentGroupIndex === Math.floor(reviewsInfo.length / 3 - 1) ? s.switchInactive : ''}`}
                    disabled={currentGroupIndex === Math.floor(reviewsInfo.length / 3 - 1)}>
                        <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${s.reviewsContainer} ${fade ? s.fadeIn : s.fadeOut}`}
            style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}>
                {getReviewsForCurrentGroup().map((review, index) => (
                  <Review
                    key={index}
                    text={review.text}
                    person={review.person}
                    doctor={review.doctor}
                    stars={review.stars}
                  />
                ))}
            </div>
            <div className={`${s.reviewsContainerPhone} ${fade ? s.fadeIn : s.fadeOut}`}
            style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}>
              <Review
                key={currentIndex}
                text={getReviewsForCurrentIndex().text}
                person={getReviewsForCurrentIndex().person}
                doctor={getReviewsForCurrentIndex().doctor}
                stars={getReviewsForCurrentIndex().stars}
              />
            </div>
            <div className={s.switcherPhone}>
                <button disabled={currentIndex === 0} onClick={() => handleSwitchPhone(-1)} className={`${s.switchBtnLeft} ${currentIndex === 0 ? s.switchInactive : ''}`}>
                  <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                  </svg>
                </button>
                <button onClick={() => handleSwitchPhone(1)} className={`${s.switchBtnRight} ${currentIndex === reviewsInfo.length - 1 ? s.switchInactive : ''}`}
                disabled={currentIndex === reviewsInfo.length - 1}>
                  <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                  </svg>
                </button>
            </div>
        </section>
    );
}

function Review ({text, person, doctor, stars}) {
    const starArray = Array.from({ length: stars }, (_, index) => index);

    return (
      <div className={s.review}>
        <div className={s.stars}>
          {starArray.map((_, index) => (
            <svg
              key={index}
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
                fill="#FEDF43"
              />
            </svg>
          ))}
        </div>
        <p className={s.reviewText}>
          {text}
        </p>
        <div className={s.reviewBorder}></div>
        <span className={s.reviewPerson}>{person}</span>
        <span className={s.reviewSpecialist}>Врач: {doctor}</span>
      </div>
    )
}