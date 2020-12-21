import Layout from '../components/layout';
import Typed from 'react-typed';

export default function Home() {
  return (
    <Layout title='Home page'>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Татьяна Савина</h1>
          <p>
            <Typed
              strings={[
                'SMM',
                'Текстовый контент',
                'Фотосъемка',
                'Контекстная реклама',
                'Медиаплaнирование'
              ]}
              typeSpeed={40}
              backSpeed={20}
              className='typed'
              loop />
          </p>
        </div>
      </section>
    </Layout>
  )
}
