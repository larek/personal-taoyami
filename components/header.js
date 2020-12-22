import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Document from 'next/document';
import { useEffect } from 'react';

const toggle = e => {
  e.stopPropagation();
  document.body.classList.toggle('mobile-nav-active');
}

export default function header() {

  const router = useRouter();

  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src="/img/profile-pic.jpg" alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light text-center"><a href="index.html">Татьяна Савина</a></h1>
          <div className='mt-1 text-center'><a className='text-white' href='mailto:taoyami@yandex.ru'>taoyami@yandex.ru</a></div>
          <div className='mt-1 text-center'><a className='text-white' href='tel:+79601641052'>+79601641052</a></div>
          <div className="social-links mt-1 text-center">
            <a href="https://facebook.com/taoyami1" target="_blank"><img src='/img/facebook.svg' className='img-fluid' /></a>
            <a href="https://instagram.com/taoyami" target="_blank"><img src='/img/instagram.svg' className='img-fluid' /></a>
            <a href="https://vk.com/taoyami" target="_blank"><img src='/img/vk.svg' className='img-fluid' /></a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li className={router.pathname === '/' ? 'active' : ''}>
              <Link href='/'><a href='/'>
                <i className='bi bi-house'></i>
                Главная
                </a></Link>
            </li>
            <li className={router.pathname === '/education' ? 'active' : ''}>
              <Link href='education'><a href='/education'>
                <i className='bi bi-bell'></i>
                Образование
                </a></Link>
            </li>
            <li className={router.pathname === '/skills' ? 'active' : ''}>
              <Link href='skills'><a href='/skills'>
                <i className='bi bi-star'></i>
                Навыки
                </a></Link>
            </li>
            <li className={router.pathname === '/resume' ? 'active' : ''}>
              <Link href='resume'><a href='/resume'>
                <i className='bi bi-file-earmark-text'></i>
                Опыт работы
                </a></Link>
            </li>
          </ul>
        </nav>
        <button type="button" onClick={toggle} className="mobile-nav-toggle d-xl-none"><i className="bi bi-list"></i></button>

      </div>
    </header>
  );
}