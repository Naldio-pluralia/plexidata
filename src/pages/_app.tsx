import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { ModalProvider } from '../hooks/useModal'


import '../styles/global.scss';



function MyApp({ Component, pageProps }: AppProps) {
  return <ModalProvider>
    <Header />
    <Component {...pageProps} />
  </ModalProvider>
}

export default MyApp
