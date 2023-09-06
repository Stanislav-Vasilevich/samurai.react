import React from 'react';
import s from './SidebarLeft.module.css';
import iconMyPage from './icons/myPage.svg';
import iconNews from './icons/news.svg';
import messages from './icons/messages.svg';
import friends from './icons/friends.svg';
import communities from './icons/communities.svg';
import photo from './icons/photo.svg';

const SidebarLeft = () => {
  return (
    <div className={s.sidebarLeft}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <img src={iconMyPage} alt="User"/>
          <span>Моя страница</span>
        </li>
        <li className={s.listItem}>
          <img src={iconNews} alt="News"/>
          <span>Новости</span>
        </li>
        <li className={s.listItem}>
          <img src={messages} alt="Messages"/>
          <span>Сообщения</span>
        </li>
        <li className={s.listItem}>
          <img src={friends} alt="Friends"/>
          <span>Друзья</span>
        </li>
        <li className={s.listItem}>
          <img src={communities} alt="Communities"/>
          <span>Сообщества</span>
        </li>
        <li className={s.listItem}>
          <img src={photo} alt=""/>
          <span>Фотографии</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLeft;
