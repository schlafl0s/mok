import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // Язык не английкий
    <Html lang="en">
      <Head>
        <link rel="icon" href="/mokFavicon.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
