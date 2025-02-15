import s from '/styles/Home.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Trust() {
  const [trustImages, setTrustImages] = useState([]);

  // Функция для запроса изображения по ID
  const fetchImageUrlById = async (imageId) => {
    try {
      const res = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/media/${imageId}`);
      const data = await res.json();
      return data.source_url;  // URL изображения
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
      return '';  // Возвращаем пустую строку, если ошибка
    }
  };

  // Функция для получения данных с API
  const fetchTrustData = async () => {
    try {
      const res = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/506`); // API для страницы с ID 506
      const data = await res.json();

      // Извлекаем ID изображений из объекта `acf.trust`
      const imageIds = Object.values(data.acf.trust);

      // Запрашиваем изображения по ID
      const images = await Promise.all(imageIds.map(async (imageId) => {
        const imgUrl = await fetchImageUrlById(imageId);
        return imgUrl; // Возвращаем URL изображения
      }));

      setTrustImages(images); // Обновляем состояние с полученными изображениями
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    fetchTrustData();
  }, []);

  // Если данные еще не загружены, показываем "Загрузка..."
  if (trustImages.length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <section className={s.trust}>
      <h1 className={s.Header}>Нам доверяют</h1>
      <div className={s.trustContainer}>
        {trustImages.map((img, index) => (
          <TrustItem key={index} img={img} />
        ))}
      </div>
    </section>
  );
}

function TrustItem({ img }) {
  return (
    <div className={s.trustItem}>
      <Image
        className={s.trustImg}
        src={img}
        width={250}
        height={250}
        alt="Trust image"
      />
    </div>
  );
}
