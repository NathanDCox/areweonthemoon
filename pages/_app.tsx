import { Space_Grotesk } from '@next/font/google'
const font = Space_Grotesk({ subsets: ['latin'], weight: ["400", "500", "700"]})

import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
};
