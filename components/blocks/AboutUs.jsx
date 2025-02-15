import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function AboutUs({ setPopupOpen, aboutInfo }) {
  const { header, text1, text2, text3, btn, img, imgPhone } = aboutInfo.aboutUs;

  const [imgUrl, setImgUrl] = useState('');
  const [imgPhoneUrl, setImgPhoneUrl] = useState('');
  const [mouseOn, setMouseOn] = useState(false)

  // Функция для получения URL изображения по ID
  const fetchImageUrl = async (imageId) => {
    try {
      const res = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/media/${imageId}`);
      const data = await res.json();
      return data.source_url; // Получаем URL изображения
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
      return '';
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      if (img) {
        setImgUrl(await fetchImageUrl(img));  // Загружаем изображение для десктопа
      }
      if (imgPhone) {
        setImgPhoneUrl(await fetchImageUrl(imgPhone));  // Загружаем изображение для телефона
      }
    };
    loadImages();
  }, [img, imgPhone]);

  return (
    <section className={s.sliderAboutUs} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
      <div className={s.slide}>
        <div className={s.aboutUsInfo}>
          <h1 className={s.slideHeaderAboutUs}>{header}</h1>
          <div className={s.descriptionContainer}>
            <p className={s.aboutDes}>{text1}</p>
            {text2 && <p className={s.aboutDes}>{text2}</p>}
            {text3 && <p className={s.aboutDes}>{text3}</p>}
          </div>
          <button onClick={() => setPopupOpen(true)} className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>
            {btn}
          </button>
        </div>
        <picture>
          <source media="(max-width: 728px)" srcSet={imgPhoneUrl} />
          <source media="(min-width: 729px)" srcSet={imgUrl} />
          <Image className={s.underHeaderBackground} width={2000} height={2000} alt="About Us Image" />
        </picture>
        <svg style={mouseOn ? { transform: 'rotate(270deg)', transition: '0.3s' } : {}} className={s.aboutUsArrow} xmlns="http://www.w3.org/2000/svg" width="108" height="107" viewBox="0 0 108 107" fill="none">
          <path d="M34.7138 54.4435L52.5899 54.4435L52.5899 72.3196L52.5899 76.3196L56.5899 76.3196L62.839 76.3196H66.839L66.839 72.3196L66.839 44.1944L66.839 40.1944L62.839 40.1944L34.7138 40.1944L30.7138 40.1944L30.7138 44.1944L30.7138 50.4435L30.7138 54.4435L34.7138 54.4435Z" fill='#51C33F' stroke='#51C33F' stroke-width="8"/>
        </svg>
      </div>
    </section>
  );
}