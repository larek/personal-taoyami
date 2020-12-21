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
      <div class="d-flex flex-column">
        <div class="profile">
          <img src="/img/profile-pic.jpg" alt="" class="img-fluid rounded-circle" />
          <h1 class="text-light"><a href="index.html">Татьяна Савина</a></h1>
          <div class="social-links mt-3 text-center">
            <a href="#"><img src='/img/facebook.svg' className='img-fluid' /></a>
            <a href="#"><img src='/img/instagram.svg' className='img-fluid' /></a>
            <a href="#"><img src='/img/vk.svg' className='img-fluid' /></a>
          </div>
        </div>

        <nav class="nav-menu">
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
            <li className={router.pathname === '/contacts' ? 'active' : ''}>
              <Link href='contacts'><a href='/contacts'>
                <i className='bi bi-envelope'></i>
                Контакты
                </a></Link>
            </li>

          </ul>
        </nav>
        <button type="button" onClick={toggle} class="mobile-nav-toggle d-xl-none"><i class="bi bi-list"></i></button>

      </div>
    </header>
  );
}