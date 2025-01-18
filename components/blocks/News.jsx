import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function News ({newsName = 'Пресс-центр'}) {
    return (
        <section className={s.news}>
            <div className={s.specialsUp}>
                <h1 className={s.Header}>{newsName}</h1>
                <div className={s.switcher}>
                    <button className={`${s.switchBtnLeft} ${s.switchInactive}`}>
                        <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                        </svg>
                    </button>
                    <button className={s.switchBtnRight}>
                        <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={s.newsContainer}>
                <NewsArticle img={'/newsArticleImg.png'} header={'Российские ученые ищут действенные способы лечения от рака'} date={'01.11.2024'} />
                <NewsArticle img={'/newsArticleImg.png'} header={'Российские ученые ищут действенные способы лечения от рака'} date={'01.11.2024'} />
                <NewsArticle img={'/newsArticleImg.png'} header={'Российские ученые ищут действенные способы лечения от рака'} date={'01.11.2024'} />
            </div>
            <div className={s.switcherPhone}>
                <button className={`${s.switchBtnLeft} ${s.switchInactive}`}>
                <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                </svg>
                </button>
                <button className={s.switchBtnRight}>
                <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                </svg>
                </button>
            </div>
        </section>
    )
}

function NewsArticle ({img, header, date}) {
    return (
      <article className={s.newsArticle}>
        <Image
        className={s.newsArticleImg}
        src={img}
        width={1000}
        height={1000}
        />
        <div className={s.newsArticleBorder}></div>
        <h2 className={s.newsArticleHeader}>{header}</h2>
        <span className={s.newsArticleDate}>{date} | Статьи</span>
        <svg className={s.newsGreenArrow} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="#5BE146"/>
        </svg>
      </article>
    )
}