import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { Navbar, Footer } from '../components';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Script
        src="https://kit.fontawesome.com/bd02c20ed3.js"
        crossOrigin="anonymous"
      />
    </ThemeProvider>
  );
}
