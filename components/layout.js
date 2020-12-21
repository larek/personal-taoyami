import Head from 'next/head'
import Header from '../components/header';


export default function Layout({ children, title }) {

  const toggle2 = e => {
    if (document.body.classList.contains('mobile-nav-active')) {
      document.body.classList.remove('mobile-nav-active');
    }
  }

  return (
    <div onClick={toggle2}>
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