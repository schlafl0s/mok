import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Slider({ setPopupOpen, slideInfo }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTransition, setCurrentTransition] = useState(0);
  const [slidesData, setSlidesData] = useState([]);
  const [mouseOn, setMouseOn] = useState(false)

  // Функция для получения изображения по ID через API
  const fetchImageUrlById = async (imageId) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/media/${imageId}`);
      const data = await res.json();
      return data.source_url;  // Получаем полный URL изображения
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
      return '';  // Если ошибка, возвращаем пустую строку
    }
  };

  useEffect(() => {
    // Преобразуем slideInfo в массив слайдов с уже готовыми изображениями
    const slidesWithImages = Object.values(slideInfo.slides).map(async (slide) => {
      const imgUrl = slide.img ? await fetchImageUrlById(slide.img) : '';  // Получаем изображение для десктопа
      const imgPhoneUrl = slide.imgPhone ? await fetchImageUrlById(slide.imgPhone) : '';  // Получаем изображение для телефона
      return { ...slide, imgUrl, imgPhoneUrl };
    });

    // Фильтруем слайды, оставляя только те, которые имеют данные
    const loadSlides = async () => {
      const filledSlides = await Promise.all(slidesWithImages);
      const nonEmptySlides = filledSlides.filter(slide =>
        slide.headerOfSlide || slide.imgUrl || slide.imgPhoneUrl || Object.values(slide.description).some(des => des)
      );
      setSlidesData(nonEmptySlides);  // Устанавливаем слайды с данными
    };

    loadSlides();
  }, [slideInfo.slides]);

  const nextSlide = () => {
    setCurrentTransition(prevTransition => {
      const newSlide = (currentSlide !== slidesData.length - 1) ? currentSlide + 1 : 0;
      const newTransition = (currentSlide !== slidesData.length - 1) ? prevTransition - 100 : 0;
      setCurrentSlide(newSlide);
      return newTransition;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setCurrentTransition(index * -100);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  function Slide({ slide }) {
    return (
      <div className={s.slide}>
        <div className={s.slideInfo}>
          {/* Если есть заголовок слайда, то показываем его */}
          {slide.headerOfSlide && <h1 className={s.slideHeader}>{slide.headerOfSlide}</h1>}

          <div className={s.descriptionContainer}>
            {/* Перебираем описание слайда, отображаем только непустые элементы */}
            {Object.values(slide.description).map((des, index) => (
              des ? (
                <div key={index} className={s.description}>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" strokeWidth="0.865725" />
                    <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" strokeWidth="0.865725" />
                    <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" strokeWidth="0.865725" />
                  </svg>
                  <span className={s.des}>{des}</span>
                </div>
              ) : null
            ))}
          </div>

          {/* Показываем кнопку только если есть текст для кнопки */}
          {slide.btn && (
            <button onClick={() => setPopupOpen(true)} className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>
              {slide.btn}
            </button>
          )}
        </div>

        <picture>
          {/* Используем реальный URL изображения для мобильной и десктопной версии */}
          <source media="(max-width: 728px)" srcSet={slide.imgPhoneUrl} />
          <source media="(min-width: 729px)" srcSet={slide.imgUrl || slide.imgPhoneUrl} />
          <Image className={s.underHeaderBackground} src={slide.imgUrl} width={2000} height={2000} />
        </picture>
      </div>
    );
  }

  return (
    <section className={s.slider} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
      <div className={s.slides} style={{ transform: `translateX(${currentTransition}%)` }}>
        {slidesData.length > 0 && (
          slidesData.map((slide, index) => (
            <Slide key={slide.id} slide={slide} isActive={index === currentSlide} />
          ))
        )}
      </div>
      <div className={s.slideCount}>
        {slidesData.map((_, index) => (
          <div
            onClick={() => goToSlide(index)}
            key={index}
            className={`${s.slideCounter} ${currentSlide === index ? s.slideCounterActive : ''}`}
          />
        ))}
      </div>
      <Image className={s.VUH} style={mouseOn ? { transform: 'rotate(180deg)', transition: '0.3s' } : {}}  src={'/V.png'} width={100} height={100} />
    </section>
  );
}
