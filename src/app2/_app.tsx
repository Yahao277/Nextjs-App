import '../styles/global.css';

import type { AppProps } from 'next/app';
import { AppContextProvider } from '@/contexts/app.context';
import { ChakraProvider } from '@chakra-ui/react';


const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
  <AppContextProvider>
    <Component {...pageProps} />
  </AppContextProvider>
  </ChakraProvider>
);

export default MyApp;