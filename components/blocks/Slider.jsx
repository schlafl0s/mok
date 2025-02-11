import s from '/styles/Home.module.scss';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Slider({ setPopupOpen, slideInfo }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesData, setSlidesData] = useState([]);
  const [mouseOn, setMouseOn] = useState(false)
  const sliderRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const autoSlideTimer = useRef(null);
  const slideWidth = 100;

  const AUTO_SLIDE_INTERVAL = 5000; // Интервал автопереключения (5 секунд)
  const TRANSITION_SPEED = 500; // Скорость анимации переключения (в мс)

  // Загрузка данных слайдов
  useEffect(() => {
    const loadSlides = async () => {
      const fetchImageUrlById = async (imageId) => {
        try {
          const res = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/media/${imageId}`);
          const data = await res.json();
          return data.source_url;
        } catch {
          return '';
        }
      };

      const slidesWithImages = await Promise.all(
        Object.values(slideInfo.slides).map(async (slide) => {
          const imgUrl = slide.img ? await fetchImageUrlById(slide.img) : '';
          const imgPhoneUrl = slide.imgPhone ? await fetchImageUrlById(slide.imgPhone) : '';
          return { ...slide, imgUrl, imgPhoneUrl };
        })
      );

      setSlidesData(
        slidesWithImages.filter(
          (slide) => slide.headerOfSlide || slide.imgUrl || slide.imgPhoneUrl
        )
      );
    };

    loadSlides();
  }, [slideInfo.slides]);

  // Управление автопереключением слайдов
  useEffect(() => {
    if (slidesData.length > 0) startAutoSlide();
    return () => clearInterval(autoSlideTimer.current);
  }, [currentSlide, slidesData]);

  const startAutoSlide = () => {
    clearInterval(autoSlideTimer.current);
    autoSlideTimer.current = setInterval(() => {
      goToSlide((currentSlide + 1) % slidesData.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  const handleSwipeStart = (e) => {
    isDragging.current = true;
    startX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    sliderRef.current.style.transition = 'none';
    clearInterval(autoSlideTimer.current);
  };

  const handleSwipeMove = (e) => {
    if (!isDragging.current) return;
    currentX.current = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentX.current - startX.current;

    if ((currentSlide === 0 && diff > 0) || (currentSlide === slidesData.length - 1 && diff < 0)) {
      return;
    }

    sliderRef.current.style.transform = `translateX(calc(${(-currentSlide * slideWidth)}% + ${diff}px))`;
  };

  const handleSwipeEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    sliderRef.current.style.transition = `transform ${TRANSITION_SPEED}ms ease`;
    const diff = currentX.current - startX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1);
      } else {
        goToSlide((currentSlide + 1) % slidesData.length);
      }
    } else {
      sliderRef.current.style.transform = `translateX(${(-currentSlide * slideWidth)}%)`;
    }
    startAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  function Slide({ slide }) {
    return (
      <div className={s.slide} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
        <div className={s.slideInfo}>
          {slide.headerOfSlide && <h1 className={s.slideHeader}>{slide.headerOfSlide}</h1>}
          <div className={s.descriptionContainer}>
            {Object.values(slide.description).map(
              (des, index) =>
                des && (
                  <div key={index} className={s.description}>
                    <svg className={s.svgSlider} width="23" height="23" viewBox="0 0 23 23" fill="none">
                      <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" strokeWidth="0.865725" />
                      <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" strokeWidth="0.865725" />
                      <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" strokeWidth="0.865725" />
                    </svg>
                    <span className={s.des}>{des}</span>
                  </div>
                )
            )}
          </div>
          {slide.btn && (
            <button onClick={() => setPopupOpen(true)} className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>
              {slide.btn}
            </button>
          )}
        </div>
        <picture>
          <source media="(max-width: 728px)" srcSet={slide.imgPhoneUrl} />
          <source media="(min-width: 729px)" srcSet={slide.imgUrl || slide.imgPhoneUrl} />
          <Image
            className={s.underHeaderBackground}
            src={slide.imgUrl || '/fallback.jpg'}
            width={2000}
            height={2000}
            alt="Slide image"
          />
        </picture>
      </div>
    );
  }

  return (
    <section
      className={s.slider}
      onMouseDown={handleSwipeStart}
      onMouseMove={handleSwipeMove}
      onMouseUp={handleSwipeEnd}
      onMouseLeave={handleSwipeEnd}
      onTouchStart={handleSwipeStart}
      onTouchMove={handleSwipeMove}
      onTouchEnd={handleSwipeEnd}
    >
      <div
        className={s.slides}
        ref={sliderRef}
        style={{ transform: `translateX(${-currentSlide * slideWidth}%)` }}
      >
        {slidesData.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
      </div>
      <div className={s.slideCount}>
        {slidesData.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`${s.slideCounter} ${currentSlide === index ? s.slideCounterActive : ''}`}
          />
        ))}
      </div>
      <Image className={s.VUH} style={mouseOn ? { transform: 'rotate(180deg)', transition: '0.3s' } : {}}  src={'/V.png'} width={100} height={100} />
      <Image className={s.VUHphone} style={mouseOn ? { transform: 'rotate(-90deg)', transition: '0.3s' } : {}}  src={'/V.png'} width={100} height={100} />
    </section>
  );
}
