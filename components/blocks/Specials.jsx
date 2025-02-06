import s from '/styles/Home.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Specials({ setPopupOpen }) {
  const [specialsData, setSpecialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Функция для запроса изображения по ID
  const fetchImageUrlById = async (imageId) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/media/${imageId}`);
      const data = await res.json();
      return data.source_url;  // URL изображения
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
      return '';
    }
  };

  // Функция для получения данных с API
  const fetchSpecialsData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/pages/263`);
      const data = await res.json();

      // Преобразуем специальные предложения с изображениями
      const specialsWithImages = await Promise.all(Object.values(data.acf.specials).map(async (special) => {
        const leftSpecialImageUrl = special.leftSpecial?.изображение ? await fetchImageUrlById(special.leftSpecial?.изображение) : '';
        const rightUpSpecialImageUrl = special.rightUpSpecial?.изображение ? await fetchImageUrlById(special.rightUpSpecial?.изображение) : '';
        const rightDownSpecialImageUrl = special.rightDownSpecial?.изображение ? await fetchImageUrlById(special.rightDownSpecial?.изображение) : '';
        
        return {
          leftSpecial: { ...special.leftSpecial, imgUrl: leftSpecialImageUrl },
          rightUpSpecial: { ...special.rightUpSpecial, imgUrl: rightUpSpecialImageUrl },
          rightDownSpecial: { ...special.rightDownSpecial, imgUrl: rightDownSpecialImageUrl }
        };
      }));

      // Фильтруем слайды, оставляя только те, где есть хотя бы одна из частей (leftSpecial, rightUpSpecial, rightDownSpecial)
      const filteredSpecials = specialsWithImages.filter(special => 
        (special.leftSpecial?.header || special.leftSpecial?.description || special.leftSpecial?.imgUrl) ||
        (special.rightUpSpecial?.header || special.rightUpSpecial?.description || special.rightUpSpecial?.imgUrl) ||
        (special.rightDownSpecial?.header || special.rightDownSpecial?.description || special.rightDownSpecial?.imgUrl)
      );

      setSpecialsData(filteredSpecials);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => {
    fetchSpecialsData();
  }, []);

  const handleSwitch = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex + direction;
        return Math.max(0, Math.min(specialsData.length - 1, newIndex));
      });
      setIsAnimating(false);
    }, 300);
  };

  const handleSwitchPhone = (direction) => {
    if (isAnimating) return
    setIsAnimating(true)
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + direction
        return Math.max(0, Math.min(specialsData.length - 1, newIndex))
      })
      setFade(true)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1);
    return () => clearTimeout(timer);
  }, [currentIndex]);

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
            className={`${s.switchBtnRight} ${currentIndex === specialsData.length - 1 ? s.switchInactive : ''}`}
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
          <h2 className={`${s.specialsLeftHeader} ${currentSlide?.leftSpecial?.isWhiteColor ? s.whiteText : ''}`}>
            {currentSlide?.leftSpecial?.header}
          </h2>
          <span className={s.specialsLeftText}>{currentSlide?.leftSpecial?.description}</span>
          <button onClick={() => setPopupOpen(true)} className={`${s.button3} ${s.buttonMat3} ${s.btn3}`}>
            {currentSlide?.leftSpecial?.btn}
          </button>
          {currentSlide?.leftSpecial?.imgUrl && (
            <Image className={s.specialsBackground} src={currentSlide?.leftSpecial?.imgUrl} width={2000} height={2000} />
          )}
        </div>

        <div className={s.specialsRight}>
          <div className={s.specialsSmallBlock1}>
            <h2 className={`${s.specialsSmallName} ${currentSlide?.rightUpSpecial?.isWhiteColor ? s.whiteText : ''}`}>
              {currentSlide?.rightUpSpecial?.header}
            </h2>
            <span className={s.specialsSmallText}>{currentSlide?.rightUpSpecial?.description}</span>
            {currentSlide?.rightUpSpecial?.imgUrl && (
              <Image className={s.specialsBackground} src={currentSlide?.rightUpSpecial?.imgUrl} width={2000} height={2000} />
            )}
          </div>
          <div className={s.specialsSmallBlock2}>
            <h2 className={`${s.specialsSmallName} ${currentSlide?.rightDownSpecial?.isWhiteColor ? s.whiteText : ''}`}>
              {currentSlide?.rightDownSpecial?.header}
            </h2>
            <span className={s.specialsSmallText}>{currentSlide?.rightDownSpecial?.description}</span>
            {currentSlide?.rightDownSpecial?.imgUrl && (
              <Image className={s.specialsBackground} src={currentSlide?.rightDownSpecial?.imgUrl} width={2000} height={2000} />
            )}
          </div>
        </div>
      </div>
      <div className={s.switcherPhone}>
        <button disabled={currentIndex === 0} onClick={() => handleSwitchPhone(-1)} className={`${s.switchBtnLeft} ${currentIndex === 0 ? s.switchInactive : ''}`}>
          <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white" />
          </svg>
        </button>
        <button disabled={currentIndex === specialsData.length - 1} onClick={() => handleSwitchPhone(1)} className={`${s.switchBtnRight} ${currentIndex === specialsData.length - 1 ? s.switchInactive : ''}`}>
          <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white" />
          </svg>
        </button>
      </div>
    </section>
  );
}
