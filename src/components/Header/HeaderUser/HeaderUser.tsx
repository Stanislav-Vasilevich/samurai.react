import React from 'react';
import s from './HeaderUser.module.css';
import user from './my.jpeg';
import arrow from './arrow.svg'

const HeaderUser = () => {
  return (
    <div className={s.user}>
      <div className={s.user__img}>
        <img className={s.user__photo} src={user} width={32} height={32} alt="Аватарка пользователя" title="Аватарка пользователя"/>
      </div>
      <div className={s.user__icon}>
        <img className={s.user__iconPhoto} src={arrow} width={12} height={8} alt="Стрелка открыть пользователя"/>
      </div>
    </div>
  );
};

export default HeaderUser;
