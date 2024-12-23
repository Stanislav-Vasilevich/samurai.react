import pointMap from './../../src/img/page/main/user-block/point-map.svg';
import backgroundPhoto from './../../src/img/page/main/user-block/mainPhoto.png';
import avatarPhoto from './../../src/img/page/main/user-block/avatar.webp';
import avatarPhoto2 from './../../src/components/MyPage/Post/travel.webp';
import photoPost from '../components/MyPage/Post/my-photo.webp';
import alekseyEterevskov from './../img/page/main/sidebar-right/friends/aleksey-eterevskov.jpeg';
import elenaKilyanova from './../img/page/main/sidebar-right/friends/helena-kilyanova.jpeg';
import antonBorisenko from './../img/page/main/sidebar-right/friends/anton-borisenko.jpg';
import olegSobolev from './../img/page/main/sidebar-right/friends/oleg-sobolev.webp';
import iconMyPage from "../components/Sidebar/SidebarLeft/icons/myPage.svg";
import iconNews from "../components/Sidebar/SidebarLeft/icons/news.svg";
import messages from "../components/Sidebar/SidebarLeft/icons/messages.svg";
import friends from "../components/Sidebar/SidebarLeft/icons/friends.svg";
import communities from "../components/Sidebar/SidebarLeft/icons/communities.svg";
import photo from "../components/Sidebar/SidebarLeft/icons/photo.svg";

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
  id: number
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

const idAlekseyEterevskov = 2;
const idElenaKilyanova = 3;
const idAntonBorisenko = 4;
const idOlegSobolev = 5;

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
      [idAlekseyEterevskov]: [
        {id: 1, isMyMessage: true, text: 'Не поверишь патрюля завели', date: '22 сен'},
        {id: 2, isMyMessage: false, text: 'Да ладно? Вот это ничесе', date: '22 сен'},
				{id: 3, isMyMessage: true, text: 'Сам в шоке, ща видео скину', date: '22 сен'}
      ],
      [idElenaKilyanova]: [
        {id: 1, isMyMessage: false, text: 'Зайди в озон. Сейчас скину тебе код на whatsApp', date: '12 авг'},
        {id: 2, isMyMessage: true, text: 'Это что на озоне? Много там, я много не понесу!', date: '12 авг'},
				{id: 3, isMyMessage: false, text: 'Нет, не много', date: '12 авг'}
      ],
      [idAntonBorisenko]: [
        {id: 1, isMyMessage: false, text: 'Привет! На работе?', date: '20 июл'},
        {id: 2, isMyMessage: true, text: 'Здарова, да. Сейчас дымники доделываю и домой', date: '20 июл'},
				{id: 3, isMyMessage: false, text: 'Понял, будешь дома набирай!', date: '20 июл'}
      ],
      [idOlegSobolev]: [
        {id: 1, isMyMessage: false, text: 'Привет! Я скоро приеду, есть дело, замутим))', date: '1 июн'},
        {id: 2, isMyMessage: true, text: 'Давай приезжай, я в деле однозначно!', date: '1 июн'},
				{id: 3, isMyMessage: false, text: 'Отлично! Буду примерно весной!', date: '2 июн'}
      ],
    }
  },
  friendsPage: {
    friends: [
      {id: idAlekseyEterevskov, name: 'Алексей', surname: 'Етеревсков', avatar: alekseyEterevskov, status: true},
      {id: idElenaKilyanova, name: 'Елена', surname: 'Кильянова', avatar: elenaKilyanova, status: false},
      {id: idAntonBorisenko, name: 'Антон', surname: 'Борисенко', avatar: antonBorisenko, status: true},
      {id: idOlegSobolev, name: 'Олег', surname: 'Соболев', avatar: olegSobolev, status: true},
    ],
  },
  communitiesPage: {},
  photoPage: {},
	sideBar: {
		links: [
			{
				id: 1,
				path: '/',
				src: iconMyPage,
				alt: 'User',
				text: 'Моя страница'
			},
			{
				id: 2,
				path: '/news',
				src: iconNews,
				alt: 'News',
				text: 'Новости'
			},
			{
				id: 3,
				path: '/messages',
				src: messages,
				alt: 'Messages',
				text: 'Сообщения'
			},
			{
				id: 4,
				path: '/friends',
				src: friends,
				alt: 'Friends',
				text: 'Друзья'
			},
			{
				id: 5,
				path: '/communities',
				src: communities,
				alt: 'CommunitiesPage',
				text: 'Сообщества'
			},
			{
				id: 6,
				path: '/photo',
				src: photo,
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
