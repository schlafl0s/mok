import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from '/styles/Home.module.scss';

export default function Directions({ directionsInfo }) {
  const [directionsData, setDirectionsData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fetchImageUrlById = async (imageId) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/media/${imageId}`);
      const data = await res.json();
      return data.source_url;
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
      return '';
    }
  };

  useEffect(() => {
    const loadDirectionsData = async () => {
      const directionsWithImages = await Promise.all(
        Object.values(directionsInfo.directions).map(async (direction) => {
          const imgUrl = direction.img ? await fetchImageUrlById(direction.img) : '';
          const imgPhoneUrl = direction.imgPhone ? await fetchImageUrlById(direction.imgPhone) : '';
          return { ...direction, imgUrl, imgPhoneUrl };
        })
      );
      setDirectionsData(directionsWithImages);
    };

    loadDirectionsData();
  }, [directionsInfo.directions]);

  return (
    <section className={s.directions}>
      <h1 className={s.Header}>Основные направления клиники</h1>
      <div className={s.directionsContainer}>
        {directionsData.map((direction, index) => (
          <Link
            key={index}
            href={direction.link}
            className={s.direction}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2 className={`${s.directionName} ${direction.isWhiteText ? s.whitePick : ""}`}>
              {direction.header}
            </h2>
            <p className={`${s.directionDes} ${direction.isWhiteText ? s.whitePick : ""}`}>
              {direction.description}
            </p>
            <svg
              style={
                hoveredIndex === index
                  ? { transform: 'rotate(45deg)', transition: '0.3s' }
                  : {}
              }
              className={`${s.directionsArrow} ${direction.isWhiteText ? s.whitePick : ""}`}
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z"
                fill={direction.arrowColor}
              />
            </svg>
            <picture>
              <source media="(max-width: 728px)" srcSet={direction.imgPhoneUrl || direction.imgPhone} />
              <source media="(min-width: 729px)" srcSet={direction.imgUrl || direction.img} />
              <Image
                className={s.dirImg}
                width={1000}
                height={1000}
                alt={direction.header}
              />
            </picture>
          </Link>
        ))}
      </div>
    </section>
  );
}
