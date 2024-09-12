import logo from '../../img/logo.webp';
import React from 'react';
import s from './Header.module.css';
import HeaderUser from './HeaderUser/HeaderUser';
import '../../App.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`${s.header__container}`}>
        <a className={s.header__logo} href="/">
          <div className={s.header__logoImg}>
            <img className={s.header__logoPhoto} src={logo} alt="Логотип блога" width="34" height="34"/>
          </div>
          <span className={s.header__logoName}>vasilevich project</span>
        </a>
        <HeaderUser/>
      </div>
    </header>
  )
}

export default Header;
