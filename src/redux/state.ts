import pointMap from './../../src/components/MainPage/UserBlock/img/point-map.svg';
import backgroundPhoto from './../../src/components/MainPage/UserBlock/img/mainPhoto.png';
import avatarPhoto from './../../src/components/MainPage/UserBlock/img/avatar.webp';
import {v1} from 'uuid';
import photoPost from './../components/MainPage/Post/my-photo.webp';
import alekseyEterevskov from './../img/page/main/sidebar-right/friends/aleksey-eterevskov.jpeg';
import elenaKilyanova from './../img/page/main/sidebar-right/friends/helena-kilyanova.jpeg';
import antonBorisenko from './../img/page/main/sidebar-right/friends/anton-borisenko.jpg';
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
  surname: string
  avatar: string
  status: boolean
}
export type MainPageType = {
  userBlock: UserBlockType
  posts: Array<PostType>
}
type NewsPageType = {}
export type messageType = {
  id: string
  isMyMessage: boolean
  text: string
  date: string
}
export type messagesType = {
  [key: string]: Array<messageType>
}
export type MessagesPageType = {
  message: messagesType
}
export type FriendsPageType = {
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
  getUser: (id: string) => FriendType
  getUserId: (id: string) => string
}

const idAlekseyEterevskov = v1();
const idElenaKilyanove = v1();
const idAntonBorisenko = v1();
const idOlegSobolev = v1();

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
      [idAlekseyEterevskov]: [
        {
          id: v1(), isMyMessage: true, text: 'Не поверишь патрюля завели', date: '22 сен',
        },
        {
          id: v1(), isMyMessage: false, text: 'Да ладно? Вот это ничесе', date: '22 сен',
        }, {
          id: v1(), isMyMessage: true, text: 'Сам в шоке, ща видео скину', date: '22 сен',
        }
      ],
      [idElenaKilyanove]: [
        {
          id: v1(), isMyMessage: false, text: 'Зайди в озон. Сейчас скину тебе код на whatsApp', date: '12 авг',
        },
        {
          id: v1(), isMyMessage: true, text: 'Это что на озоне? Много там, я много не понесу!', date: '12 авг',
        }, {
          id: v1(), isMyMessage: false, text: 'Нет, не много', date: '12 авг',
        }
      ],
      [idAntonBorisenko]: [
        {
          id: v1(), isMyMessage: false, text: 'Привет! На работе?', date: '20 июл',
        },
        {
          id: v1(), isMyMessage: true, text: 'Здарова, да. Сейчас дымники доделываю и домой', date: '20 июл',
        }, {
          id: v1(), isMyMessage: false, text: 'Понял, будешь дома набирай!', date: '20 июл',
        }
      ],
      [idOlegSobolev]: [
        {
          id: v1(), isMyMessage: false, text: 'Привет! Я скоро приеду, есть дело, замутим))', date: '1 июн',
        },
        {
          id: v1(), isMyMessage: true, text: 'Давай приезжай, я в деле однозначно!', date: '1 июн',
        }, {
          id: v1(), isMyMessage: false, text: 'Отлично! Буду примерно весной!', date: '2 июн',
        }
      ],
    }
  },
  friendsPage: {
    friends: [
      {id: idAlekseyEterevskov, name: 'Алексей', surname: 'Етеревсков', avatar: alekseyEterevskov, status: true},
      {id: idElenaKilyanove, name: 'Елена', surname: 'Кильянова', avatar: elenaKilyanova, status: false},
      {id: idAntonBorisenko, name: 'Антон', surname: 'Борисенко', avatar: antonBorisenko, status: true},
      {id: idOlegSobolev, name: 'Олег', surname: 'Соболев', avatar: olegSobolev, status: true},
    ],
  },
  communitiesPage: {},
  photoPage: {},
  getUser(name) {
    return this.friendsPage.friends.filter(f => f.name === name)[0];
  },
  getUserId(name) {
    return this.friendsPage.friends.filter(f => f.name === name)[0].id;
  },
}
