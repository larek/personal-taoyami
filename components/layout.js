import Head from 'next/head'
import Header from '../components/header';

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id='main'>
        {children}
      </main>
    </div>
  )
}