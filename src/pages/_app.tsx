import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
