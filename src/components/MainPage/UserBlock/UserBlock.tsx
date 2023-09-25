import React from 'react';
import s from './UserBlock.module.css';
import mainPhoto from './img/mainPhoto.png';
import avatar from './img/avatar.webp';
import pointMap from './img/point-map.svg';

const UserBlock = () => {
  return (
    <div className={s.user__block}>
      <div className={s.user__background}>
        <img className={s.user__photo} src={mainPhoto} alt="Main photo home page"/>
      </div>
      <div className={s.user__info}>
        <div className={s.user__avatar}>
          <img className={s.user__photo} src={avatar} alt="User avatar"/>
        </div>
        <div className={s.user__textBlock}>
          <h1 className={s.user__name}>Станислав Василевич</h1>
          <div className={s.user__status}>
            <a className={s.user__statusLink} href="https://it-bunker.studio">https://it-bunker.studio</a>. Web-разработчик(frontend). Технологии:
            HTML5, CSS3, JavaScript(ES-6), PHP, React,
            SASS, Gulp, WebPack, GIT, NodeJS
          </div>
          <div className={s.user__map}>
            <img className={s.user__mapIcon} src={pointMap} alt="point on the map"/>
            <a className={s.user__mapText} href="#">Краснодар</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBlock;
