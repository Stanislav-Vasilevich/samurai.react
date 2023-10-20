import React from 'react';
import s from './SidebarLeft.module.css';
import iconMyPage from './icons/myPage.svg';
import iconNews from './icons/news.svg';
import messages from './icons/messages.svg';
import friends from './icons/friends.svg';
import communities from './icons/communities.svg';
import photo from './icons/photo.svg';
import {v1} from 'uuid';
import NavSidebarLeft from './NavSidebarLeft/NavSidebarLeft';

const data = [
  {
    id: v1(),
    path: '/',
    src: iconMyPage,
    alt: 'User',
    text: 'Моя страница'
  },
  {
    id: v1(),
    path: '/news',
    src: iconNews,
    alt: 'News',
    text: 'Новости'
  },
  {
    id: v1(),
    path: '/messages',
    src: messages,
    alt: 'Messages',
    text: 'Сообщения'
  },
  {
    id: v1(),
    path: '/friends',
    src: friends,
    alt: 'Friends',
    text: 'Друзья'
  },
  {
    id: v1(),
    path: '/communities',
    src: communities,
    alt: 'CommunitiesPage',
    text: 'Сообщества'
  },
  {
    id: v1(),
    path: '/photo',
    src: photo,
    alt: 'Photo',
    text: 'Фотографии'
  },
]

const SidebarLeft = () => {
  return (
    <div className={s.sidebarLeft}>
      <ul className={s.list}>
        {
          data.map(i => {
            return <NavSidebarLeft key={i.id} path={i.path} src={i.src} alt={i.alt} text={i.text}/>
          })
        }
      </ul>
    </div>
  );
};

export default SidebarLeft;
