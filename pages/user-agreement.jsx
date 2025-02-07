import Bread from '@/components/blocks/Bread';
import s from '/styles/Technical.module.scss'
import Layout from '@/components/Layout'
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function userAgreement ({ policyInfo }) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        // Извлекаем данные из пропсов и формируем их в нужную структуру
        const formattedContent = Object.values(policyInfo.policyAndAgreement).map(item => {
            const texts = item.text.split('<br />').map(text => text.trim()).filter(Boolean);
            
            // Возвращаем объект только если есть текст или заголовок
            if (texts.length > 0 || item.header.trim()) {
                return {
                    title: item.header,
                    texts: texts,
                };
            }
            return null;
        }).filter(Boolean); // Убираем пустые разделы

        setContent(formattedContent);
    }, [policyInfo]);

    return (
        <>
        <Head>
            <title>Пользовательское соглашение</title>
        </Head>
        <Layout footerCut={true}>
            <main className={s.main}>
                <Bread first={'Пользовательское соглашение'} firstLink={'/user-agreement'}/>
                <h1 className={s.technicalHeader}>Пользовательское соглашение</h1>
                <div className={s.textsContainer}>
                    {content.map((section, index) => (
                        <section key={index} className={s.textContainer}>
                            {/* Отображаем заголовок только если он есть */}
                            {section.title && section.title.trim() !== "" && (
                                <h2 className={s.techHeader}>{section.title}</h2>
                            )}
                            {/* Отображаем все тексты для текущего раздела */}
                            {section.texts.map((text, idx) => (
                                <p key={idx} className={s.techText}>{text}</p>
                            ))}
                        </section>
                    ))}
                </div>
            </main>
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    // Делаем запрос к API для получения данных
    const resPolicy = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/785`);
    const dataPolicy = await resPolicy.json();
    const policyInfo = dataPolicy.acf;

    return {
        props: {
            policyInfo: policyInfo,
        },
    };
}