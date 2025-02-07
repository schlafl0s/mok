import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function AboutUs({ setPopupOpen, aboutInfo }) {
  const { header, text1, text2, text3, btn, img, imgPhone } = aboutInfo.aboutUs;

  const [imgUrl, setImgUrl] = useState('');
  const [imgPhoneUrl, setImgPhoneUrl] = useState('');

  // Функция для получения URL изображения по ID
  const fetchImageUrl = async (imageId) => {
    try {
      const res = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/media/${imageId}`);
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
    <section className={s.slider}>
      <div className={s.slide}>
        <div className={s.aboutUsInfo}>
          <h1 className={`${s.slideHeader} ${s.slideHeaderFZ}`}>{header}</h1>
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
          <Image className={s.underHeaderBackground} src={imgUrl || "/aboutUs.png"} width={2000} height={2000} alt="About Us Image" />
        </picture>
      </div>
    </section>
  );
}