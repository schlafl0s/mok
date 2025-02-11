import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function SpecialService({ setPopupOpen, specialServiceInfo }) {
  const { header, text, btn, img, imgPhone } = specialServiceInfo.services;

  const [imgUrl, setImgUrl] = useState('');
  const [imgPhoneUrl, setImgPhoneUrl] = useState('');
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
    loadImages();
  }, [img, imgPhone]);

  return (
    <div className={s.specialService} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
      <div className={s.specialServiceInfo}>
        <h1 className={s.specialServiceHeader}>{header}</h1>
        <span className={s.specialServiceDes}>{text}</span>
        <button onClick={() => setPopupOpen(true)} className={`${s.button7} ${s.buttonMat7} ${s.btn7}`}>
          {btn}
        </button>
      </div>
      <picture>
        <source media="(max-width: 728px)" srcSet={imgPhoneUrl} />
        <source media="(min-width: 729px)" srcSet={imgUrl} />
        <Image
          className={s.specialServiceBackground}
          width={2000}
          height={2000}
        />
      </picture>
      <Image className={s.VUHservice} style={mouseOn ? { transform: 'rotate(360deg)', transition: '0.3s' } : {transform: 'rotate(180deg)'}} src={'/V.png'} width={100} height={100} />
      <Image className={s.VUHservicePhone} style={mouseOn ? { transform: 'rotate(90deg)', transition: '0.3s' } : {transform: 'rotate(-90deg)'}} src={'/V.png'} width={100} height={100} />
    </div>
  );
}

export async function getStaticProps() {
  const resSpecialService = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/682`);
  const dataSpecialService = await resSpecialService.json();
  const specialServiceInfo = dataSpecialService.acf;

  return {
    props: {
      specialServiceInfo: specialServiceInfo,
    },
  };
}
