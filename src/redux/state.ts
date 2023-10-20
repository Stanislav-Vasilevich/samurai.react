import pointMap from './../../src/components/MainPage/UserBlock/img/point-map.svg';
import backgroundPhoto from './../../src/components/MainPage/UserBlock/img/mainPhoto.png';
import avatarPhoto from './../../src/components/MainPage/UserBlock/img/avatar.webp';
import {v1} from "uuid";
import photoPost from './../components/MainPage/Post/my-photo.webp';
import alekseyEterevskov from './../components/Sidebar/SidebarRight/aleksey-eterevskov.jpeg';
import elenaKilyanova from './../components/Sidebar/SidebarRight/helena-kilyanova.jpeg';
import arturDjaarbekov from './../components/Sidebar/SidebarRight/arturDjaarbekov.webp';

export type UserBlockType = {
  backgroundPhoto: string
  backgroundPhotoAlt: string
  avatarPhoto: string
  avatarPhotoAlt: string
  name: string
  statusLink: string
  statusText: string
  pointMapIcon: string
  pointMapIconAlt: string
  town: string
}
type PostType = {
  id: string
  avatarPhoto: string
  avatarPhotoAlt: string
  name: string
  date: string
  text: string
  photo: string
  photoAlt: string
  likesCount: number
}
export type FriendType = {
  id: string
  name: string
  avatar: string
  status: boolean
}
export type StateType = {
  userBlock: UserBlockType
  posts: Array<PostType>
  friends: Array<FriendType>
}

export const state: StateType = {
  userBlock: {
    backgroundPhoto: backgroundPhoto,
    backgroundPhotoAlt: 'Фоновая картинка страницы пользователя',
    avatarPhoto: avatarPhoto,
    avatarPhotoAlt: 'Аватарка пользователя',
    name: 'Станислав Василевич',
    statusLink: 'https://it-bunker.studio',
    statusText: `. Frontend developer. Stack:
            HTML5, CSS3, JavaScript(ES-6), React, TDD, Vite,
            GIT, NodeJS,WebPack, SASS, Gulp`,
    pointMapIcon: pointMap,
    pointMapIconAlt: 'Иконка - точка на карте',
    town: 'Краснодар'
  },
  posts: [
    {
      id: v1(),
      avatarPhoto: avatarPhoto,
      avatarPhotoAlt: 'Аватарка пользователя',
      name: 'Станислав Василевич',
      date: '20 августа в 11:48',
      text: 'Жизнь это код, а код это кайф))',
      photo: photoPost,
      photoAlt: 'Пишу код в гамаке посреди сада абрикосов',
      likesCount: 5,
    },
  ],
  friends: [
    {id: v1(), name: 'Алексей Етеревсков', avatar: alekseyEterevskov, status: true},
    {id: v1(), name: 'Елена Кильянова', avatar: elenaKilyanova, status: true},
    {id: v1(), name: 'Артур Джаарбеков', avatar: arturDjaarbekov, status: false},
  ],
}
