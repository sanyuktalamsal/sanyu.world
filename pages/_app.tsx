import '../styles/globals.scss';
import Image from 'next/image';
import type { AppProps } from 'next/app'
//cant use word class has to be className
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head';
import '@sakun/system.css';

const CustomGlobalStyle = createGlobalStyle`
  body {
    user-select: none;
    background-color: rgb(13 148 136);
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
      
      <CustomGlobalStyle />
      <div>
        <Component {...pageProps} />
      </div>
  </>
  );
}

export default MyApp
