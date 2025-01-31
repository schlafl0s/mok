import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Service ({ setPopupOpen, servicePageInfo }) {
  const { header, text, btn, img, imgPhone } = servicePageInfo.bannerService
  const [imgUrl, setImgUrl] = useState('');
  const [imgPhoneUrl, setImgPhoneUrl] = useState('');
  const [formattedText, setFormattedText] = useState([]);

  // Функция для получения URL изображения по ID
  const fetchImageUrl = async (imageId) => {
    try {
      const res = await fetch(`http://mok-clinic.local/wp-json/wp/v2/media/${imageId}`);
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

    const formatText = () => {
      if (text) {
        const formatted = text.split('<br />')
          .map(str => str.trim())
          .filter(Boolean);
        setFormattedText(formatted);
      }
    };

    formatText();
    loadImages();
  }, [img, imgPhone, text]);

  return (
    <section className={s.slider}>
        <div className={s.slide}>
            <div className={s.aboutUsInfo}>
            <h1 className={s.serviceHeader}>{header}</h1>
            <div className={s.descriptionContainer}>
              {formattedText.map((line, idx) => (
                <p key={idx} className={s.aboutDes}>{line}</p>
              ))}
            </div>
            <button onClick={() => setPopupOpen(true)} className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>{btn}</button>
            </div>
            <picture>
            <source media="(max-width: 728px)" srcSet={imgPhoneUrl} />
            <source media="(min-width: 729px)" srcSet={imgUrl} />
            <Image className={s.underHeaderBackground} src={imgUrl} width={2000} height={2000} />
            </picture>
        </div>
    </section>
  );
}