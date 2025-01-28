import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Specialists({ setPopupOpen, specialistsInfo }) {
  const [specialistsData, setSpecialistsData] = useState(specialistsInfo)  // Начальные данные без изображений
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const [fade, setFade] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Флаг для предотвращения лишних запросов
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Загружаем изображения через useEffect только один раз
  useEffect(() => {
    if (imagesLoaded) return;  // Если изображения уже загружены, не загружаем их снова

    const fetchImages = async () => {
      const updatedSpecialists = await Promise.all(specialistsData.map(async (specialist) => {
        if (specialist.imgId) {
          const imgResponse = await fetch(`http://mok-clinic.local/wp-json/wp/v2/media/${specialist.imgId}`)
          const imgData = await imgResponse.json()
          return { ...specialist, img: imgData.source_url }  // Добавляем правильный URL картинки
        }
        return specialist
      }))

      setSpecialistsData(updatedSpecialists)  // Обновляем состояние с изображениями
      setImagesLoaded(true)  // Отмечаем, что изображения загружены
    }

    fetchImages()
  }, [specialistsData, imagesLoaded]) // Теперь зависимость от imagesLoaded, чтобы избежать повторных загрузок

  const handleSwitch = (direction) => {
    if (isAnimating) return
    setIsAnimating(true)
    setFade(false)
    setTimeout(() => {
      setCurrentGroupIndex((prevIndex) => {
        const newIndex = prevIndex + direction
        return Math.max(0, Math.min(Math.floor(specialistsData.length / 3), newIndex))
      })
      setIsAnimating(false)
    }, 300)
  }

  const handleSwitchPhone = (direction) => {
    if (isAnimating) return
    setIsAnimating(true)
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + direction
        return Math.max(0, Math.min(specialistsData.length - 1, newIndex))
      })
      setFade(true)
      setIsAnimating(false)
    }, 300)
  }

  const getSpecialistsForCurrentGroup = () => {
    const startIndex = currentGroupIndex * 3
    return specialistsData.slice(startIndex, startIndex + 3)
  }

  const getSpecialistForCurrentIndex = () => {
    return specialistsData[currentIndex] || {}
  }

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1)
    return () => clearTimeout(timer)
  }, [currentGroupIndex])

  function Specialist({ img, experience, name, specialty, option1, option2 }) {
    return (
      <div className={s.specialistCard}>
        <div className={s.specialistInfo}>
          <div className={s.experience}>Стаж: {experience}</div>
          <Image
            className={s.specialistImg}
            src={img}
            width={220}
            height={220}
          />
          <div className={s.specialistInfoText}>
            <span className={s.specialistName}>
              {name}
            </span>
            <ul className={s.specialistOptions}>
              <li>{specialty}</li>
              {option1 && <li>{option1}</li>}
              {option2 && <li>{option2}</li>}
            </ul>
          </div>
        </div>
        <button onClick={() => setPopupOpen(true)} className={`${s.button1} ${s.buttonMat1} ${s.btn1}`}>Записаться на прием</button>
      </div>
    );
  }

  return (
    <section className={s.specialist}>
      <div className={s.specialsUp}>
        <h1 className={s.Header}>Наши специалисты</h1>
        <div className={s.switcher}>
          <button disabled={currentGroupIndex === 0} onClick={() => handleSwitch(-1)} className={`${s.switchBtnLeft} ${currentGroupIndex === 0 ? s.switchInactive : ''}`}>
            <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white" />
            </svg>
          </button>
          <button onClick={() => handleSwitch(1)} className={`${s.switchBtnRight} ${currentGroupIndex === Math.floor(specialistsData.length / 3 - 1) ? s.switchInactive : ''}`}
            disabled={currentGroupIndex === Math.floor(specialistsData.length / 3 - 1)}>
            <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${s.specialistContainer} ${fade ? s.fadeIn : s.fadeOut}`}
        style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}>
        {specialistsData.length > 0 && getSpecialistsForCurrentGroup().map((specialist, index) => (
          <Specialist
            key={index}
            img={specialist.img}
            experience={specialist.experience}
            name={specialist.name}
            specialty={specialist.specialty}
            option1={specialist.option1}
            option2={specialist.option2}
            setPopupOpen={setPopupOpen}
          />
        ))}
      </div>

      {/* Мобильная версия */}
      <div className={`${s.specialistContainerPhone} ${fade ? s.fadeIn : s.fadeOut}`}
        style={{ transition: 'opacity 0.3s ease-out, transform 0.5s ease-out' }}>
        {/* Проверяем наличие данных для текущего индекса */}
        {specialistsData[currentIndex] && (
          <Specialist
            key={currentIndex}
            img={specialistsData[currentIndex].img}
            experience={specialistsData[currentIndex].experience}
            name={specialistsData[currentIndex].name}
            specialty={specialistsData[currentIndex].specialty}
            option1={specialistsData[currentIndex].option1}
            option2={specialistsData[currentIndex].option2}
            setPopupOpen={setPopupOpen}
          />
        )}
      </div>
      <div className={s.switcherPhone}>
        <button disabled={currentIndex === 0} onClick={() => handleSwitchPhone(-1)} className={`${s.switchBtnLeft} ${currentIndex === 0 ? s.switchInactive : ''}`}>
          <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white" />
          </svg>
        </button>
        <button disabled={currentIndex === specialistsData.length - 1} onClick={() => handleSwitchPhone(1)} className={`${s.switchBtnRight} ${currentIndex === specialistsData.length - 1 ? s.switchInactive : ''}`}>
          <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white" />
          </svg>
        </button>
      </div>
    </section>
  );
}
