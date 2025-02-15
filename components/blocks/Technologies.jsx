import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Technologies({ technologiesInfo }) {
  const fetchImageUrlById = async (imageId) => {
    try {
      const res = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/media/${imageId}`);
      const data = await res.json();
      return data.source_url;  // Получаем полный URL изображения
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
      return '';  // Если ошибка, возвращаем пустую строку
    }
  };

  // Преобразуем данные в технологии с уже готовыми изображениями
  const technologiesData = Object.values(technologiesInfo.technologies || {}).map(async (tech) => {
    const imgUrl = tech.img ? await fetchImageUrlById(tech.img) : '';  // Получаем изображение для технологии
    return { ...tech, imgUrl };
  });

  // Ждем, пока все изображения загрузятся
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      const filledTechnologies = await Promise.all(technologiesData);
      setTechnologies(filledTechnologies);  // Устанавливаем данные технологий с изображениями
    };

    loadTechnologies();
  }, [technologiesInfo]);

  return (
    <section className={s.technologies}>
      <h1 className={s.Header}>Технологии и оборудование</h1>
      <div className={s.technologiesContainer}>
        <div className={s.technologiesMiniContainer}>
          {/* Первая половина карточек */}
          {technologies.slice(0, 2).map((technology, index) => (
            <div key={index} className={s.technology}>
              <Image
                className={s.technologyImg}
                src={technology.imgUrl || '/default-image.png'} // Если нет изображения, показываем дефолтное
                width={1000}
                height={1000}
                alt={technology.header}
              />
              <div className={s.technologyInfo}>
                <h2 className={s.technologyName}>{technology.header}</h2>
                <ul className={s.technologyText}>
                  {Object.values(technology.Options).map((option, idx) => (
                    option && <li key={idx}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={s.technologiesMiniContainer}>
          {/* Вторая половина карточек */}
          {technologies.slice(2, 4).map((technology, index) => (
            <div key={index} className={s.technology}>
              <Image
                className={s.technologyImg}
                src={technology.imgUrl || '/default-image.png'} // Если нет изображения, показываем дефолтное
                width={1000}
                height={1000}
                alt={technology.header}
              />
              <div className={s.technologyInfo}>
                <h2 className={s.technologyName}>{technology.header}</h2>
                <ul className={s.technologyText}>
                  {Object.values(technology.Options).map((option, idx) => (
                    option && <li key={idx}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
