import React from 'react';
import s from './HeaderUser.module.css';
import user from './my.jpeg';
import arrow from './arrow.svg';
import './../../../index.css';

const HeaderUser = () => {
  return (
    <div className={s.user}>
      <div className={s.user__img}>
        <img className="photo" src={user} alt="Аватарка пользователя"/>
      </div>
      <div className={s.user__icon}>
        <img className={s.user__iconPhoto} src={arrow} alt="Стрелка открыть пользователя"/>
      </div>
    </div>
  );
};

export default HeaderUser;
