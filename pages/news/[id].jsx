import { useState, useEffect } from 'react';
import s from '/styles/Technical.module.scss';
import Layout from '@/components/Layout';
import Image from 'next/image';
import News from '@/components/blocks/News';
import Head from 'next/head';

export default function Article({ articlesInfo, articleData }) {
    const { header, date, content } = articleData;
    const [images, setImages] = useState({});
    const [formattedContent, setFormattedContent] = useState([]);

    // Запрос картинок для новостей
    const fetchImageUrl = async (imageId) => {
        try {
            const res = await fetch(`http://mok-clinic.local/wp-json/wp/v2/media/${imageId}`);
            const data = await res.json();
            return data.source_url;
        } catch (error) {
            console.error("Error fetching image URL:", error);
            return '';
        }
    };

    useEffect(() => {
        // Обработка контента
        const formatContent = () => {
            const formatted = Object.values(content).map(item => {
                if (item.text) {
                    const texts = item.text.split('<br />').map(text => text.trim()).filter(Boolean);
                    return {
                        ...item,
                        formattedText: texts,
                    };
                }
                return item;
            }).filter(Boolean);

            setFormattedContent(formatted);
        };

        if (content) {
            formatContent();
        }

        // Запросить картинки для всех блоков контента
        const fetchAllImages = async () => {
            const imageUrls = {};
            if (content && typeof content === 'object') {
                for (const blockKey in content) {
                    const block = content[blockKey];
                    if (block.img) {
                        const imageUrl = await fetchImageUrl(block.img);
                        imageUrls[block.img] = imageUrl;
                    }
                }
            }
            setImages(imageUrls);
        };

        if (content) {
            fetchAllImages();
        }
    }, [content]);

    return (
        <>
            <Head>
                <title>{header}</title>
            </Head>
            <Layout footerCut={true}>
                <main className={s.main}>
                    <div className={s.articleHead}>
                        <h1 className={s.articleTitle}>{header}</h1>
                        <p className={s.articleDate}>{date}</p>
                    </div>

                    {/* Контент статьи */}
                    <div className={s.articleDataContainer}>
                        {formattedContent && formattedContent.map((block, index) => {
                            if (!block || (!block.header2 && !block.formattedText && !block.img)) return null;

                            return (
                                <div key={index} className={s.articleBlock}>
                                    {block.header2 && <h2 className={s.articleHeader}>{block.header2}</h2>}
                                    {block.formattedText && block.formattedText.map((text, idx) => (
                                        <p key={idx} className={s.articleText}>{text}</p>
                                    ))}
                                    {block.img && images[block.img] && (
                                        <Image
                                            className={s.articleImage}
                                            src={images[block.img]}
                                            width={1200}
                                            height={800}
                                            alt={block.header2 || 'Article Image'}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <News newsName="Вам может быть интересно" articlesInfo={articlesInfo} />
                </main>
            </Layout>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch('http://mok-clinic.local/wp-json/wp/v2/posts?categories=6&per_page=100');
    const posts = await res.json();
    const { id } = params;
    const resOne = await fetch(`http://mok-clinic.local/wp-json/wp/v2/posts/${id}`);
    const post = await resOne.json();

    const articleData = {
        id: post.id,
        header: post.acf?.article?.articlePage?.header || '',
        date: post.acf?.article?.articlePage?.date || '',
        content: post.acf?.article?.articlePage?.content || {},
    };

    const articlesInfo = posts.map((post) => {
        const article = post.acf?.article?.miniArticle || {};
        return {
            id: post.id,
            miniHeader: article.miniHeader,
            miniDate: article.miniData,
            miniImg: article.miniImg,
        };
    });

    return {
        props: {
            articlesInfo,
            articleData,
        },
    };
}
