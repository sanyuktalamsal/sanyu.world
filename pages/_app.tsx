import '../styles/globals.scss';
import Image from 'next/image';
import type { AppProps } from 'next/app'
import { ThemeProvider, GlobalStyle } from '@react95/core';
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head';

const CustomGlobalStyle = createGlobalStyle`
  body {
    user-select: none;
    background-color: rgb(139 92 246);
  }

  img {
    pointer-events: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>sanyu.world</title>
        <meta content="sanyu.world" property="og:site_name" />
        <meta content="sanyu.world" property="og:title" />
        <meta content="Sanyu's world" property="og:description" />
        <meta content="object" property="og:type" />
        <meta content="https://sanyu.world" property="og:url" />
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <CustomGlobalStyle />
        <div className="fixed w-full h-full z-0">
          <Image
            className="bg-repeat"
            src='/bubbles_3.gif'
            fill={true}
            alt='The background image'
            />
        </div>
        <div className="fixed z-10 overflow-hidden">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp
