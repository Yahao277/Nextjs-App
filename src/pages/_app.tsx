import '../styles/global.css';

import type { AppProps } from 'next/app';
import { AppContextProvider } from '@/contexts/app.context';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppContextProvider>
    <Component {...pageProps} />
  </AppContextProvider>
);

export default MyApp;
