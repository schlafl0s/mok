import { useState, useEffect } from 'react';
import s from '/styles/Home.module.scss';

export default function BigReviews({ reviewsInfo }) {
    const [currentReviews, setCurrentReviews] = useState([]); // Отзывы, которые показываются на текущей странице
    const [page, setPage] = useState(1); // Текущая страница

    const reviewsPerPage = 6; // Количество отзывов на одну страницу

    // Обновляем текущие отзывы для отображения на странице
    const updateCurrentReviews = () => {
        const startIndex = (page - 1) * reviewsPerPage;
        const newCurrentReviews = reviewsInfo.slice(0, startIndex + reviewsPerPage);
        setCurrentReviews(newCurrentReviews);
    };

    // Загружаем новые отзывы при изменении страницы
    useEffect(() => {
        updateCurrentReviews();
    }, [reviewsInfo, page]); // Обновляем отображаемые отзывы при изменении страницы или новых отзывов

    // Обработчик кнопки "Показать еще"
    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1); // Увеличиваем номер страницы
    };

    // Проверяем, есть ли еще отзывы для отображения
    const hasMoreReviews = currentReviews.length < reviewsInfo.length;

    return (
        <section className={s.bigReviews}>
            <div className={s.specialsUp}>
                <h1 className={s.Header}>Что говорят пациенты</h1>
            </div>
            <div className={s.bigReviewsContainer}>
                {currentReviews.map((review, index) => (
                    <Review
                        key={index}
                        text={review.text}
                        person={review.author}
                        doctor={review.doctor}
                        stars={review.stars}
                    />
                ))}
            </div>

            {/* Кнопка "Показать еще" только если есть еще отзывы для загрузки */}
            {hasMoreReviews && (
                <button
                    className={`${s.button8} ${s.buttonMat8} ${s.btn8}`}
                    onClick={handleLoadMore}
                >
                    Показать еще
                </button>
            )}
        </section>
    );
}

// Компонент для рендеринга отдельного отзыва
function Review({ text, person, doctor, stars }) {
    const starArray = Array.from({ length: stars }, (_, index) => index);

    return (
        <div className={s.bigReview}>
            <div className={s.stars}>
                {starArray.map((_, index) => (
                    <svg
                        key={index}
                        width="25"
                        height="23"
                        viewBox="0 0 25 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
                            fill="#FEDF43"
                        />
                    </svg>
                ))}
            </div>
            <p className={s.reviewText}>{text}</p>
            <div className={s.reviewBorder}></div>
            <span className={s.reviewPerson}>{person}</span>
            <span className={s.reviewSpecialist}>Врач: {doctor}</span>
        </div>
    );
}
