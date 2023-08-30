import logo from '../../img/code.png';
import React from 'react';
import s from './Header.module.css';
import HeaderUser from './HeaderUser/HeaderUser';
import './../../App.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <a className={s.header__logo} href="https://vasilevich.blog">
          <div className={s.header__logoImg}>
            <img className={s.header__logoPhoto} src={logo} alt="Логотип блога" height="24"/>
          </div>
          <span className={s.header__logoName}>vasilevich</span>
        </a>
        <HeaderUser/>
      </div>
    </header>
  )
}

export default Header;
