import s from '/styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react'

export default function Sale ({ saleInfo }) {
  const { img, imgPhone, btn, linkBtn } = saleInfo.sale;

  const [imgUrl, setImgUrl] = useState('');
  const [imgPhoneUrl, setImgPhoneUrl] = useState('');

  const fetchImageUrl = async (imageId) => {
    try {
      const res = await fetch(`http://mok-clinic.local/wp-json/wp/v2/media/${imageId}`);
      const data = await res.json();
      return data.source_url;  // Получаем URL изображения
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
    <section className={s.sale}>
      <picture>
        <source media="(max-width: 728px)" srcSet={imgPhoneUrl} />
        <source media="(min-width: 729px)" srcSet={imgUrl} />
        <Image
          className={s.saleBackground}
          src={imgUrl}
          width={2000}
          height={2000}
          alt="Sale Background"
        />
      </picture>
      
      {btn && (
        <button className={`${s.button2} ${s.buttonMat2} ${s.btn2}`}>
          <Link href={linkBtn || '/contacts'}>
            {btn}
          </Link>
        </button>
      )}
    </section>
  );
}
