import fetch from 'node-fetch';

function getWordPressRoutes() {
  const endpoints = [
    "https://wp.doctor-mok.ru/wp-json/wp/v2/pages?per_page=100",
  ];

  return Promise.all(
    endpoints.map(async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data.map((item) => `/${item.slug}`);
    })
  ).then((routesArray) => routesArray.flat());
}

const siteUrl = "https://doctor-mok.ru";

export default {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/admin"],
  additionalPaths: async (config) => {
    const dynamicPaths = await getWordPressRoutes();
    return dynamicPaths.map((path) => ({
      loc: path,
      changefreq: "daily",
      priority: 0.7,
    }));
  },
};
