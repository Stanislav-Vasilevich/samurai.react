import pointMap from './../../src/components/MainPage/UserBlock/img/point-map.svg';
import backgroundPhoto from './../../src/components/MainPage/UserBlock/img/mainPhoto.png';
import avatarPhoto from './../../src/components/MainPage/UserBlock/img/avatar.webp';
import {v1} from "uuid";
import photoPost from './../components/MainPage/Post/my-photo.webp';
import alekseyEterevskov from './../img/page/main/sidebar-right/friends/aleksey-eterevskov.jpeg';
import elenaKilyanova from './../img/page/main/sidebar-right/friends/helena-kilyanova.jpeg';
import olegSobolev from './../img/page/main/sidebar-right/friends/oleg-sobolev.webp';

export type UserBlockType = {
  id: string
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
export type MainPageType = {
  userBlock: UserBlockType
  posts: Array<PostType>
}
type NewsPageType = {}
type messageType = {
  [key: string]: Array<{}>
}
type MessagesPageType = {
  message: messageType
}
type FriendsPageType = {
  friends: Array<FriendType>
}
type CommunitiesPageType = {}
type PhotoPageType = {}
export type StateType = {
  mainPage: MainPageType
  newsPage: NewsPageType
  messagesPage: MessagesPageType
  friendsPage: FriendsPageType
  communitiesPage: CommunitiesPageType
  photoPage: PhotoPageType
}

export const state: StateType = {
  mainPage: {
    userBlock: {
      id: v1(),
      backgroundPhoto: backgroundPhoto,
      backgroundPhotoAlt: 'Фоновая картинка страницы пользователя',
      avatarPhoto: avatarPhoto,
      avatarPhotoAlt: 'Аватарка пользователя',
      name: 'Станислав Василевич',
      statusLink: 'https://vasilevich.blog',
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
  },
  newsPage: {},
  messagesPage: {
    message: {
      [123]: [{}, {}, {}],
    }
  },
  friendsPage: {
    friends: [
      {id: v1(), name: 'Алексей Етеревсков', avatar: alekseyEterevskov, status: true},
      {id: v1(), name: 'Елена Кильянова', avatar: elenaKilyanova, status: false},
      {id: v1(), name: 'Антон Борисенко', avatar: olegSobolev, status: true},
    ],
  },
  communitiesPage: {},
  photoPage: {}
}
