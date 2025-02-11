import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Service ({ setPopupOpen, servicePageInfo }) {
  const { header, text, btn, img, imgPhone } = servicePageInfo.bannerService
  const [imgUrl, setImgUrl] = useState('');
  const [imgPhoneUrl, setImgPhoneUrl] = useState('');
  const [formattedText, setFormattedText] = useState([]);
  const [mouseOn, setMouseOn] = useState(false)

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
    <section className={s.sliderService} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
        <div className={s.slide}>
            <div className={s.aboutUsInfo}>
            <h1 className={s.serviceHeader}>{header}</h1>
            <div className={s.descriptionContainer}>
              {formattedText.map((line, idx) => (
                <p key={idx} className={`${s.aboutDes} ${s.aboutDesFw}`}>{line}</p>
              ))}
            </div>
            <button onClick={() => setPopupOpen(true)} className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>{btn}</button>
            </div>
            <picture>
            <source media="(max-width: 728px)" srcSet={imgPhoneUrl} />
            <source media="(min-width: 729px)" srcSet={imgUrl} />
            <Image className={s.underHeaderBackground} width={2000} height={2000} />
            </picture>
            <svg style={mouseOn ? { transform: 'rotate(360deg)', transition: '0.3s' } : {}} className={s.serviceArrow} xmlns="http://www.w3.org/2000/svg" width="108" height="107" viewBox="0 0 108 107" fill="none">
              <path d="M34.7138 54.4435L52.5899 54.4435L52.5899 72.3196L52.5899 76.3196L56.5899 76.3196L62.839 76.3196H66.839L66.839 72.3196L66.839 44.1944L66.839 40.1944L62.839 40.1944L34.7138 40.1944L30.7138 40.1944L30.7138 44.1944L30.7138 50.4435L30.7138 54.4435L34.7138 54.4435Z" fill='#391FCF' stroke='#391FCF' stroke-width="8"/>
            </svg>
        </div>
    </section>
  );
}