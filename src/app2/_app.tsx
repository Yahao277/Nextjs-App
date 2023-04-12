import '../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { AppContextProvider } from '@/contexts/app.context';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  </ChakraProvider>
);

export default MyApp;
