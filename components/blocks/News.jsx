import s from '/styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function News ({newsName = 'Пресс-центр', articlesInfo}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [images, setImages] = useState({});

    // Запрос картинок для новостей
    const fetchImageUrl = async (imageId) => {
        try {
            const res = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/media/${imageId}`);
            const data = await res.json();
            return data.link;
        } catch (error) {
            console.error("Error fetching image URL:", error);
            return ''; // Возвращаем пустую строку, если не удалось получить изображение
        }
    };

    useEffect(() => {
        // Запросить картинки для всех новостей
        const fetchAllImages = async () => {
            const imageUrls = {};
            for (const article of articlesInfo) {
                const imageUrl = await fetchImageUrl(article.miniImg);
                imageUrls[article.id] = imageUrl; // Сохраняем URL изображения для каждой статьи
            }
            setImages(imageUrls); // Обновляем состояние с изображениями
        };

        fetchAllImages();
    }, [articlesInfo]);

    // Функции для переключения
    const handleSwitch = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setFade(false);
        setTimeout(() => {
            setCurrentGroupIndex((prevIndex) => {
                const newIndex = prevIndex + direction;
                return Math.max(0, Math.min(Math.floor(articlesInfo.length / 3), newIndex));
            });
            setIsAnimating(false);
        }, 300);
    };

    const handleSwitchPhone = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex + direction;
                return Math.max(0, Math.min(articlesInfo.length - 1, newIndex));
            });
            setFade(true);
            setIsAnimating(false);
        }, 300);
    };

    const getNewsForCurrentGroup = () => {
        const startIndex = currentGroupIndex * 3;
        return articlesInfo.slice(startIndex, startIndex + 3);
    };

    const getNewsForCurrentIndex = () => {
        return articlesInfo[currentIndex];
    };

    useEffect(() => {
        const timer = setTimeout(() => setFade(true), 1);
        return () => clearTimeout(timer);
    }, [currentGroupIndex]);

    return (
        <section className={s.news}>
            <div className={s.specialsUp}>
                <h1 className={s.Header}>{newsName}</h1>
                <div className={s.switcher}>
                    <button disabled={currentGroupIndex === 0} onClick={() => handleSwitch(-1)} className={`${s.switchBtnLeft} ${currentGroupIndex === 0 ? s.switchInactive : ''}`}>
                        <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                        </svg>
                    </button>
                    <button onClick={() => handleSwitch(1)} className={`${s.switchBtnRight} ${currentGroupIndex === Math.floor(articlesInfo.length / 3) ? s.switchInactive : ''}`}
                    disabled={currentGroupIndex === Math.floor(articlesInfo.length / 3)}>
                        <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${s.newsContainer} ${fade ? s.fadeIn : s.fadeOut}`}
            style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}>
                {articlesInfo.length === 0 ? (
                    <p>Новостей нету...</p>
                ) : (
                    getNewsForCurrentGroup().map(article => (
                        <NewsArticle
                            id={article.id}
                            img={images[article.id]}  // Используем путь, полученный из состояния
                            header={article.miniHeader}
                            date={article.miniDate}
                        />
                    ))
                )}
            </div>
            <div className={`${s.newsContainerPhone} ${fade ? s.fadeIn : s.fadeOut}`}
            style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}>
                <NewsArticle
                id={getNewsForCurrentIndex().id}
                img={images[getNewsForCurrentIndex().id] || ''}
                header={getNewsForCurrentIndex().miniHeader}
                date={getNewsForCurrentIndex().miniDate}
                />
            </div>
            <div className={s.switcherPhone}>
                <button disabled={currentIndex === 0} onClick={() => handleSwitchPhone(-1)} className={`${s.switchBtnLeft} ${currentIndex === 0 ? s.switchInactive : ''}`}>
                    <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                    </svg>
                </button>
                <button onClick={() => handleSwitchPhone(1)} className={`${s.switchBtnRight} ${currentIndex === Math.floor(articlesInfo.length - 1) ? s.switchInactive : ''}`}
                disabled={currentIndex === Math.floor(articlesInfo.length - 1)}>
                    <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </section>
    );
}

function NewsArticle ({img, header, date, id}) {
    const [mouseOn, setMouseOn] = useState(false)
    return (
        <Link onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)} href={`/news/${id}`} className={s.newsArticle}>
            <Image
            className={s.newsArticleImg}
            src={img}
            width={1000}
            height={1000}
            />
            <div className={s.newsArticleBorder}></div>
            <h2 className={s.newsArticleHeader}>{header}</h2>
            <span className={s.newsArticleDate}>{date} | Статьи</span>
            <svg style={mouseOn ? { transform: 'rotate(45deg)', transition: '0.3s' } : {}} className={s.newsGreenArrow} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="#5BE146"/>
            </svg>
        </Link>
    );
}