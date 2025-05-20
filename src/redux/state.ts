import pointMap from './../../src/img/page/main/user-block/point-map.svg';
import backgroundPhoto from './../../src/img/page/main/user-block/mainPhoto.png';
import avatarPhoto from './../../src/img/page/main/user-block/avatar.webp';
import avatarPhoto2 from '../components/HomePage/Post/travel.webp';
import photoPost from '../components/HomePage/Post/my-photo.webp';
import aE from './../img/page/main/sidebar-right/friends/aleksey-eterevskov.jpeg';
import eK from './../img/page/main/sidebar-right/friends/helena-kilyanova.jpeg';
import aB from './../img/page/main/sidebar-right/friends/anton-borisenko.jpg';
import oS from './../img/page/main/sidebar-right/friends/oleg-sobolev.webp';
import iconHomePage from "../components/Sidebar/SidebarLeft/icons/myPage.svg";
import iconNewsPage from "../components/Sidebar/SidebarLeft/icons/news.svg";
import iconMessagesPage from "../components/Sidebar/SidebarLeft/icons/messages.svg";
import iconFriendsPage from "../components/Sidebar/SidebarLeft/icons/friends.svg";
import iconCommunitiesPage from "../components/Sidebar/SidebarLeft/icons/communities.svg";
import iconPhotoPage from "../components/Sidebar/SidebarLeft/icons/photo.svg";
import one from '../components/MessagesPage/MessagesList/one.jpg';
import two from '../components/MessagesPage/MessagesList/two.jpg';
import three from '../components/MessagesPage/MessagesList/three.jpg';
import four from '../components/MessagesPage/MessagesList/four.jpg';
import five from '../components/MessagesPage/MessagesList/five.jpg';
import six from '../components/MessagesPage/MessagesList/six.jpg';
import { v1 } from 'uuid';

export type UserBlockType = {
  id: number
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
	link: string
}
type PostType = {
  id: number
  avatarPhoto: string
  avatarPhotoAlt: string
  name: string
  date: string
	title: string
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
export type HomePageType = {
  userBlock: UserBlockType
  posts: Array<PostType>
}
export type NewsPageType = {
  posts: Array<PostType>
}
export type messageType = {
  id: number
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
export type SideBarLinkType = {
	id: number
	path: string
	src: string
	alt: string
	text: string
}
type SideBarType = {
	links: Array<SideBarLinkType>
}
export type StateType = {
  homePage: HomePageType
  newsPage: NewsPageType
  messagesPage: MessagesPageType
  friendsPage: FriendsPageType
  communitiesPage: CommunitiesPageType
  photoPage: PhotoPageType
	sideBar: SideBarType
  getUser: (id: string) => FriendType
  getUserId: (id: string) => number
}

export const state: StateType = {
  homePage: {
    userBlock: {
      id: 1,
      backgroundPhoto: backgroundPhoto,
      backgroundPhotoAlt: 'Фоновая картинка страницы пользователя',
      avatarPhoto: avatarPhoto,
      avatarPhotoAlt: 'Аватарка пользователя',
      name: 'Станислав Василевич',
      statusLink: '', /* https://vasilevich.blog */
      statusText: `Frontend developer. Stack:
            HTML5, CSS3, JavaScript(ES-6), React, TDD, Vite, WebPack,
            GIT, PHP8, слепая печать.`,
      pointMapIcon: pointMap,
      pointMapIconAlt: 'Иконка - точка на карте',
      town: 'Волгоградская область, ст-ца Арчединская',
			link: 'https://yandex.ru/maps/-/CDHhi4ZO',
    },
    posts: [
      {
        id: 1,
        avatarPhoto: avatarPhoto,
        avatarPhotoAlt: 'Аватарка пользователя',
        name: 'Станислав Василевич',
        date: '20 августа в 11:48',
				title: 'Нужен код?',
        text: 'Привет! Как Вы там, по ту сторону экрана? Вот сижу я и думаю, может стоит взяться за что-то интересное, серьёзное, написать какой-нибудь большуший проект? Нужен код! Да и плевать что и кто скажет, главное чтобы самому было интересно! Вступить, так сказать в марафон, поймать волну. Ну ок! А что сделать? Ведь нужно что-то .., ну вы поняли. С таким видом из окна куча идей лезет в голову, остается только выбрать нужную картинку. Да уж, Питер дает вдохновение не только Пушкину и Блоку. Нужно прогуляться, посетить набережную "Мойки", Дворцовую площадь, постоять в очереди в знаменитую "Пышечную", в общем подумать!',
        photo: photoPost,
        photoAlt: 'Нужен код!',
        likesCount: 5,
      },
			{
				id: 2,
				avatarPhoto: avatarPhoto,
				avatarPhotoAlt: 'Аватарка пользователя',
				name: 'Станислав Василевич',
				date: '28 сентября в 10:00',
				title: 'Привет Мир!',
				text: 'Какой-то там текст!',
				photo: avatarPhoto2,
				photoAlt: 'Нужен код!',
				likesCount: 5,
			},
    ],
  },
  newsPage: {
    posts: [
      {
        id: 1,
        avatarPhoto: avatarPhoto,
        avatarPhotoAlt: 'Аватарка пользователя',
        name: 'Станислав Василевич',
        date: '22 декабря в 16:01',
        title: 'Сегодня я узнал, что моя бабушка жива!',
        text: 'С тех пор как я последний раз видел свою бабушку прошло уже 32 года. Я потерял все надежды на поиски, но внезапно я наткнулся на фото отца, написал ему и он сообщил, что моя бабушка еще жива. Я незамедлительно написал о встрече!',
        photo: '',
        photoAlt: 'Встреча с бабушкой',
        likesCount: 2,
      },
      {
        id: 2,
        avatarPhoto: avatarPhoto,
        avatarPhotoAlt: 'Аватарка пользователя',
        name: 'Станислав Василевич',
        date: '23 декабря в 10:00',
        title: 'Поднял 65кг на грудь',
        text: 'Сегодня на тренировке я поднял 65кг штангу на грудь первый подход без веса, далее добавил 20кг и сделал 12 повторений, далее еще 10кг на 12 повторений и после этого добавил еще 10кг, в итоге получилось 60кг, сделал 8 повторений. После этого тренер сказал добавить еще 5кг и я сделал 3 подхода по 8 повторений.',
        photo: '',
        photoAlt: 'Жим штанги лежа',
        likesCount: 125,
      },
    ]
  },
  messagesPage: {
    message: {
      '1': [
        {id: 1, isMyMessage: true, text: 'Не поверишь патрюля завели', date: '22 сен'},
        {id: 2, isMyMessage: false, text: 'Да ладно? Вот это ничесе', date: '22 сен'},
				{id: 3, isMyMessage: true, text: 'Сам в шоке, ща видео скину', date: '22 сен'}
      ],
      '2': [
        {id: 1, isMyMessage: false, text: 'Зайди в озон. Сейчас скину тебе код на whatsApp', date: '12 авг'},
        {id: 2, isMyMessage: true, text: 'Это что на озоне? Много там, я много не понесу!', date: '12 авг'},
				{id: 3, isMyMessage: false, text: 'Нет, не много', date: '12 авг'}
      ],
      '3': [
        {id: 1, isMyMessage: false, text: 'Привет! На работе?', date: '20 июл'},
        {id: 2, isMyMessage: true, text: 'Здарова, да. Сейчас дымники доделываю и домой', date: '20 июл'},
				{id: 3, isMyMessage: false, text: 'Понял, будешь дома набирай!', date: '20 июл'}
      ],
      '4': [
        {id: 1, isMyMessage: false, text: 'Привет! Я скоро приеду, есть дело, замутим))', date: '1 июн'},
        {id: 2, isMyMessage: true, text: 'Давай приезжай, я в деле однозначно!', date: '1 июн'},
				{id: 3, isMyMessage: false, text: 'Отлично! Буду примерно весной!', date: '2 июн'}
      ],
    }
  },
  friendsPage: {
    friends: [
      {id: '1', name: 'Алексей', surname: 'Етеревсков', avatar: aE, status: true},
      {id: '2', name: 'Елена', surname: 'Кильянова', avatar: eK, status: false},
      {id: '3', name: 'Антон', surname: 'Борисенко', avatar: aB, status: true},
      {id: '4', name: 'Олег', surname: 'Соболев', avatar: oS, status: true},
    ],
  },
  communitiesPage: {},
  photoPage: {},
	sideBar: {
		links: [
			{
				id: 1,
				path: '/',
				src: iconHomePage,
				alt: 'User',
				text: 'Моя страница'
			},
			{
				id: 2,
				path: '/news',
				src: iconNewsPage,
				alt: 'News',
				text: 'Новости'
			},
			{
				id: 3,
				path: '/messages',
				src: iconMessagesPage,
				alt: 'Messages',
				text: 'Сообщения'
			},
			{
				id: 4,
				path: '/friends',
				src: iconFriendsPage,
				alt: 'Friends',
				text: 'Друзья'
			},
			{
				id: 5,
				path: '/communities',
				src: iconCommunitiesPage,
				alt: 'CommunitiesPage',
				text: 'Сообщества'
			},
			{
				id: 6,
				path: '/photos',
				src: iconPhotoPage,
				alt: 'Photo',
				text: 'Фотографии'
			},
		]
	},
  getUser(name) {
    return this.friendsPage.friends.filter(f => f.name === name)[0];
  },
  getUserId(name: string) {
    return this.friendsPage.friends.filter(f => f.name === name)[0].id;
  },
}


// type PropsType = {
//   friendsPage: FriendsPageType
//   messagePage: MessagesPageType
// }
//
// export type userType = {
//   id: string
//   name: string
//   text: string
//   photo: string
//   alt: string
//   date: string
// }
//
// const data: Array<userType> = [
//   {
//     id: v1(),
//     name: 'Олег Соболев',
//     text: 'Давай приезжай, я в деле однозначно!',
//     photo: one,
//     alt: 'avatar one',
//     date: '22 сен',
//   },
//   {
//     id: v1(),
//     name: 'Алексей Етеревсков',
//     text: 'Ну ты иде есть?',
//     photo: two,
//     alt: 'avatar two',
//     date: '12 авг',
//   },
//   {
//     id: v1(),
//     name: 'Антон Борисенко',
//     text: 'Можешь создать сайт, где все мне платят на карту?',
//     photo: three,
//     alt: 'avatar two',
//     date: '20 июл',
//   },
//   {
//     id: v1(),
//     name: 'Вирса Петровна',
//     text: 'Мяу мяу мяу. Мяу мяу мяу мяу мяу мяу мяу!',
//     photo: four,
//     alt: 'avatar two',
//     date: '1 июн',
//   },
//   {
//     id: v1(),
//     name: 'Игорь Юдинцев',
//     text: 'Я в отпуске, как приду будем потеть!',
//     photo: five,
//     alt: 'avatar two',
//     date: '1 июн',
//   },
//   {
//     id: v1(),
//     name: 'Елена Кильянова',
//     text: 'Это что на озоне? Много там, я много не понесу!',
//     photo: six,
//     alt: 'avatar two',
//     date: '18 апр',
//   },
// ]
