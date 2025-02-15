import { useState, useEffect } from 'react';
import s from '/styles/Home.module.scss';
import Image from 'next/image';

export default function HowIsItGoing({ servicePageInfo }) {
    const { howPoint, img } = servicePageInfo.howIsItGoing
    const [imgUrl, setImgUrl] = useState('');

    const points = Object.values(howPoint).filter(
        point => point.header && point.text
    );
    
    const fetchImageUrl = async (imageId) => {
        try {
            const res = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/media/${imageId}`);
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
        };
        loadImages();
    }, [img]);

    return (
        <div className={s.how}>
        <h1 className={s.Header}>Как проходит процедура</h1>
        <div className={s.howContainer}>
            <div className={s.howInfo}>
            {points.map((item, index) => (
                <Hidden 
                key={index} 
                num={String(index + 1).padStart(2, '0')} 
                header={item.header} 
                text={item.text} 
                />
            ))}
            </div>
            <Image className={s.howImg} src={imgUrl} width={2000} height={2000} alt="Процедура" />
        </div>
        </div>
    );
}

function Hidden({ num, header, text }) {
    const [hidden, setHidden] = useState(false);

    return (
        <button onClick={() => setHidden(!hidden)} className={s.howHidden}>
        <div className={s.upSide}>
            <div className={s.howLeftHidden}>
            <div className={`${s.howNum} ${hidden ? s.howNumBlue : ''}`}>{num}</div>
            <h2 className={s.howHeader}>{header}</h2>
            </div>
            <div className={s.howStatus}>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={hidden ? s.line : s.unactiveLine} d="M8.7041 0.870117V18.1757" stroke="#5BE146" strokeWidth="1.73056" />
                <path className={hidden ? s.line2 : s.unactiveLine2} d="M0.0512695 9.52246L17.3568 9.52246" stroke="#5BE146" strokeWidth="1.73056" />
            </svg>
            </div>
        </div>
        <p className={`${hidden ? s.howText : s.howTextUnactive}`}>{text}</p>
        </button>
    );
}
