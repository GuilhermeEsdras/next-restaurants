import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import Layout from '../layout';
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

const Home: NextPage = () => {
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? dark : light;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Next Restaurants</title>
          <GlobalStyle />
          {isMounted && <Layout />}
        </Head>
      </ThemeProvider>
    </div>
  );
};

export default Home;
