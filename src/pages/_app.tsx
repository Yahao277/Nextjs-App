import '../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import { AppContextProvider } from '@/contexts/app.context';
import { PostContextProvider } from '@/contexts/post.context';
import { ProjectContextProvider } from '@/contexts/project.context';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider>
      <AppContextProvider>
        <ProjectContextProvider>
          <PostContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </PostContextProvider>
        </ProjectContextProvider>
      </AppContextProvider>
    </ChakraProvider>
  );
};

export default MyApp;
