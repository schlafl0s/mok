import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function StatsMini () {const [statsData, setStatsData] = useState([]);
  const [textsStats, setTextsStats] = useState({});
  
  // Функция для получения изображения по ID через API
  const fetchImageUrlById = async (imageId) => {
    try {
      const res = await fetch(`http://mok-clinic.local/wp-json/wp/v2/media/${imageId}`);
      const data = await res.json();
      return data.source_url;  // Получаем полный URL изображения
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
      return '';  // Если ошибка, возвращаем пустую строку
    }
  };

  // Функция для загрузки данных с API
  const fetchStatsData = async () => {
    try {
      const res = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages?slug=stats');  // Получаем страницу статистики
      const data = await res.json();
      const statsInfo = data[0].acf;  // Данные ACF из первого объекта

      // Извлекаем данные для карточек
      const cardsData = await Promise.all(
        Object.values(statsInfo.cardsStats).map(async (card) => {
          const imgSrc = card.cardImg ? await fetchImageUrlById(card.cardImg) : '';
          return {
            imgSrc,
            number: card.cardNumber,
            text: card.cardText,
            numberColor: card.cardNumberColor // Храним цвет, который передается с сервера
          };
        })
      );

      setStatsData(cardsData);
      setTextsStats(statsInfo.textsStats); // Тексты для статистики

    } catch (error) {
      console.error("Ошибка при загрузке данных статистики:", error);
    }
  };

  useEffect(() => {
    fetchStatsData();
  }, []);

    return (
        <section className={s.statsMini}>
            <div className={s.statsContainer}>
            <div className={s.statsCards}>
            {statsData.length > 0 && statsData.map((card, index) => (
                <div key={index} className={`${s.statsCard} ${s.statsCardMini}`}>
                    <Image
                        className={s.statsImg}
                        src={card.imgSrc}
                        width={80}
                        height={80}
                        alt={card.text}
                    />
                    <div 
                        className={s.statsNumber} 
                        style={{ color: card.numberColor }}  // Применяем цвет напрямую через стиль
                    >
                        {card.number}
                    </div>
                    <span className={s.statsText}>{card.text}</span>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}