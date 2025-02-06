import s from '/styles/Home.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function WhyUs() {
  const [whyUsData, setWhyUsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [fade, setFade] = useState(true);
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
  const fetchWhyUsData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/pages/462`);
      const data = await res.json();
      
      const whyUsWithImages = await Promise.all(Object.values(data.acf.whyUs).map(async (slide) => {
        const imgUrl = slide.img ? await fetchImageUrlById(slide.img) : '';
        return {
          header: slide.header,
          text: slide.text,
          imgUrl: imgUrl,
        };
      }));

      // Фильтруем слайды, оставляя только те, где есть данные
      const filteredWhyUs = whyUsWithImages.filter((slide) => slide.header || slide.text || slide.imgUrl);

      setWhyUsData(filteredWhyUs);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => {
    fetchWhyUsData();
  }, []);

  // Функция для переключения групп
  const handleSwitch = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFade(false);
    setTimeout(() => {
      setCurrentGroupIndex((prevIndex) => {
        const newIndex = prevIndex + direction;
        return Math.max(0, Math.min(Math.floor(whyUsData.length / 2), newIndex));
      });
      setFade(true);
      setIsAnimating(false);
    }, 300);
  };

  // Функция для переключения слайдов в мобильной версии
  const handleSwitchPhone = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + direction;
        return Math.max(0, Math.min(whyUsData.length - 1, newIndex));
      });
      setFade(true);
      setIsAnimating(false);
    }, 300);
  };

  // Функция для получения данных для текущей группы
  const getWhyUsForCurrentGroup = () => {
    const startIndex = currentGroupIndex * 2;
    return whyUsData.slice(startIndex, startIndex + 2);
  };

  // Функция для получения данных для текущего слайда
  const getWhyUsForCurrentIndex = () => {
    // Защита на случай, если данных нет
    return whyUsData[currentIndex] || {};
  };

  // Если данных еще нет, показываем "загрузку"
  if (whyUsData.length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <section className={s.whyUs}>
      <div className={s.whyUsBackground}></div>
      <div className={s.specialsUp}>
        <h1 className={s.Header}>Почему выбирают нас</h1>
        <div className={s.switcher}>
          <button
            disabled={currentGroupIndex === 0}
            onClick={() => handleSwitch(-1)}
            className={`${s.switchBtnLeft} ${currentGroupIndex === 0 ? s.switchInactive : ''}`}
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
            className={`${s.switchBtnRight} ${currentGroupIndex === Math.floor(whyUsData.length / 2 - 1) ? s.switchInactive : ''}`}
            disabled={currentGroupIndex === Math.floor(whyUsData.length / 2 - 1)}
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
      <div className={`${s.whyUsContainer} ${fade ? s.fadeIn : s.fadeOut}`}>
        {getWhyUsForCurrentGroup().map((whyUs, index) => (
          <WhyUsCard
            key={index}
            img={whyUs.imgUrl}
            header={whyUs.header}
            text={whyUs.text}
          />
        ))}
      </div>
      <div
        className={`${s.whyUsContainerPhone} ${fade ? s.fadeIn : s.fadeOut}`}
        style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}
      >
        <WhyUsCard
          key={currentIndex}
          img={getWhyUsForCurrentIndex().imgUrl}
          header={getWhyUsForCurrentIndex().header}
          text={getWhyUsForCurrentIndex().text}
        />
      </div>
      <div className={s.switcherPhone}>
        <button
          disabled={currentIndex === 0}
          onClick={() => handleSwitchPhone(-1)}
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
          onClick={() => handleSwitchPhone(1)}
          disabled={currentIndex === whyUsData.length - 1}
          className={`${s.switchBtnRight} ${currentIndex === whyUsData.length - 1 ? s.switchInactive : ''}`}
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
    </section>
  );
}

const WhyUsCard = ({ img, header, text }) => {
  return (
    <div className={s.whyUsCard}>
      {img && <Image className={s.whyUsImg} src={img} alt={header} width={600} height={400} />}
      <h3 className={s.whyUsHeader}>{header}</h3>
      <p className={s.whyUsText}>{text}</p>
    </div>
  );
};
