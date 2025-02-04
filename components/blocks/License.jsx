import { useEffect, useState } from 'react';
import s from '/styles/Home.module.scss';
import Image from 'next/image';

export default function License() {
  const [pdfUrl, setPdfUrl] = useState(''); // Для первого файла (лицензия)
  const [legalPdfUrl, setLegalPdfUrl] = useState(''); // Для второго файла (правовая информация)
  const [mediaId, setMediaId] = useState(null);
  const [legalMediaId, setLegalMediaId] = useState(null);
  const [mouseOn, setMouseOn] = useState(false)

  useEffect(() => {
    // Функция для получения данных страницы (с ID для медиафайлов)
    const fetchPageData = async () => {
      try {
        const response = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/549');
        const data = await response.json();

        // Получаем ID для первого файла (лицензии) и второго файла (правовой информации)
        const mediaIdFromPage = data.acf?.license?.license; // ID лицензии
        const legalMediaIdFromPage = data.acf?.license?.legalInformation; // ID правовой информации

        if (mediaIdFromPage) {
          setMediaId(mediaIdFromPage); // Сохраняем ID для первого файла
        } else {
          console.error('ID лицензии не найден');
        }

        if (legalMediaIdFromPage) {
          setLegalMediaId(legalMediaIdFromPage); // Сохраняем ID для второго файла
        } else {
          console.error('ID правовой информации не найден');
        }
      } catch (error) {
        console.error('Ошибка при получении данных страницы:', error);
      }
    };

    fetchPageData();
  }, []);

  useEffect(() => {
    // Если ID первого медиафайла уже получен, запрашиваем его URL
    if (mediaId !== null) {
      const fetchPdfUrl = async () => {
        try {
          const response = await fetch(`http://mok-clinic.local/wp-json/wp/v2/media/${mediaId}`);
          const data = await response.json();

          if (data.source_url) {
            setPdfUrl(data.source_url); // Сохраняем URL для первого файла
          } else {
            console.error('PDF URL для лицензии не найден');
          }
        } catch (error) {
          console.error('Ошибка при получении медиафайла для лицензии:', error);
        }
      };

      fetchPdfUrl();
    }
  }, [mediaId]);

  useEffect(() => {
    // Если ID второго медиафайла уже получен, запрашиваем его URL
    if (legalMediaId !== null) {
      const fetchLegalPdfUrl = async () => {
        try {
          const response = await fetch(`http://mok-clinic.local/wp-json/wp/v2/media/${legalMediaId}`);
          const data = await response.json();

          if (data.source_url) {
            setLegalPdfUrl(data.source_url); // Сохраняем URL для второго файла
          } else {
            console.error('PDF URL для правовой информации не найден');
          }
        } catch (error) {
          console.error('Ошибка при получении медиафайла для правовой информации:', error);
        }
      };

      fetchLegalPdfUrl();
    }
  }, [legalMediaId]);

  return (
    <section className={s.license}>
      <div className={s.licenseBackground}></div>
      <div className={s.licenseContainer}>
        <h1 className={s.Header}>Лицензии</h1>
        <div className={s.licenseCard} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
          <picture>
            <source media="(max-width: 728px)" srcSet="/licenseBackgroundPhone.png" />
            <source media="(min-width: 729px)" srcSet="/licenseBackground.png" />
            <Image
              className={s.licenseBackgroundImg}
              width={2000}
              height={2000}
            />
          </picture>
          <Image
            style={mouseOn ? { transform: 'rotate(90deg)', transition: '0.3s' } : {}}
            className={s.licenseX}
            src={'/X.png'}
            width={77}
            height={77}
          />
          <div className={s.licenseInfo}>
            <p className={s.licenseText}>
              Мы осуществляем деятельность на основании медицинских лицензий в соответствии
              с рекомендациями Минздрава
            </p>
            <div className={s.licenseBtns}>
              {/* Кнопка для открытия первого файла (лицензии) */}
              <button
                className={`${s.button6} ${s.buttonMat6} ${s.btn6}`}
                onClick={() => window.open(pdfUrl, '_blank')}
                disabled={!pdfUrl} // Делаем кнопку неактивной, если URL не загружен
              >
                Посмотреть лицензии
              </button>

              {/* Кнопка для открытия второго файла (правовая информация) */}
              <button
                className={`${s.button4} ${s.buttonMat4} ${s.btn4}`}
                onClick={() => window.open(legalPdfUrl, '_blank')}
                disabled={!legalPdfUrl} // Делаем кнопку неактивной, если URL не загружен
              >
                Правовая информация
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
