import { useState } from 'react';
import Image from 'next/image';
import s from '/styles/Home.module.scss';

export default function BigSpecialists({ setPopupOpen, specialistsInfo }) {
  const [page, setPage] = useState(1);
  const [isChildDoctors, setIsChildDoctors] = useState(false);
  const [visibleLetters, setVisibleLetters] = useState(8);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [doctors, setDoctors] = useState(specialistsInfo);
  const specialistsPerPage = 12;

  // Фильтрация по типу врачей и специальности
  const filteredDoctors = doctors
    .filter(doctor => doctor.isChild === isChildDoctors)
    .filter(doctor => !selectedSpecialty || doctor.specialty === selectedSpecialty);

  const currentDoctors = filteredDoctors.slice(0, page * specialistsPerPage);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  const hasMoreDoctors = filteredDoctors.length > currentDoctors.length;

  const groupedSpecialties = currentDoctors.reduce((acc, doctor) => {
    const firstLetter = doctor.specialty[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    if (!acc[firstLetter].includes(doctor.specialty)) {
      acc[firstLetter].push(doctor.specialty);
    }
    return acc;
  }, {});

  const sortedLetters = Object.keys(groupedSpecialties).sort();

  const handleSpecialtyClick = (specialty) => {
    if (specialty === selectedSpecialty) {
      setSelectedSpecialty(null); // Сброс фильтра
    } else {
      setSelectedSpecialty(specialty); // Выбор новой специальности
    }
  };

  const handleShowAllLetters = () => {
    setVisibleLetters(Object.keys(groupedSpecialties).length); // Показываем все буквы
  };

  function Specialist({ img, experience, name, specialty, option1, option2 }) {
    return (
      <div className={`${s.specialistCard} ${s.specialistCardWidth}`}>
        <div className={s.specialistInfo}>
          <div className={s.experience}>Стаж: {experience}</div>
          <Image className={s.specialistImg} src={img} width={220} height={220} alt={name} />
          <div className={s.specialistInfoText}>
            <span className={s.specialistName}>{name}</span>
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

  function Letter({ letter, specialties }) {
    return (
      <div className={s.letter}>
        <div className={s.letterLetter}>{letter}</div>
        <div className={s.letterDoctors}>
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className={`${s.letterDoctor} ${specialty === selectedSpecialty ? s.selectedSpecialty : ''}`}
              onClick={() => handleSpecialtyClick(specialty)}
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <section className={s.doctors}>
        <h1 className={s.Header}>Врачи</h1>
        <div className={s.doctorsType}>
          <button
            className={`${s.button12} ${s.buttonMat12} ${s.btn12} ${!isChildDoctors ? s.btn12Active : ''}`}
            onClick={() => setIsChildDoctors(false)}
          >
            Взрослые врачи
          </button>
          <button
            className={`${s.button12} ${s.buttonMat12} ${s.btn12} ${isChildDoctors ? s.btn12Active : ''}`}
            onClick={() => setIsChildDoctors(true)}
          >
            Детские врачи
          </button>
        </div>
        <div className={s.letters}>
          {sortedLetters.slice(0, visibleLetters).map(letter => (
            <Letter
              key={letter}
              letter={letter}
              specialties={groupedSpecialties[letter]}
            />
          ))}
        </div>
        {sortedLetters.length > visibleLetters && (
          <button onClick={handleShowAllLetters} className={s.moreButton}>
            Показать все
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.462891 0.5L5.46289 4.5L10.0933 0.5" stroke="#391FCF"/>
            </svg>
          </button>
        )}
      </section>

      <section className={s.bigReviews}>
        <div className={s.bigReviewsContainer}>
          {currentDoctors.map((doctor) => (
            <Specialist
              key={doctor.id}
              name={doctor.name}
              img={doctor.img} // Передаем реальный URL картинки
              experience={doctor.experience}
              specialty={doctor.specialty}
              option1={doctor.option1}
              option2={doctor.option2}
            />
          ))}
        </div>
        {hasMoreDoctors && (
          // Зачем ты css модули по итогу вставляешь строкой, есть пакеты classNames
          <button onClick={handleShowMore} className={`${s.button8} ${s.buttonMat8} ${s.btn8}`}>Показать еще</button>
        )}
      </section>
    </>
  );
}
