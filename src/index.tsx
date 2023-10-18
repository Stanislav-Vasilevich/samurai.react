import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import pointMap from './../src/components/MainPage/UserBlock/img/point-map.svg';
import backgroundPhoto from './../src/components/MainPage/UserBlock/img/mainPhoto.png';
import avatarPhoto from './../src/components/MainPage/UserBlock/img/avatar.webp';
import {v1} from "uuid";
import photoPost from './components/MainPage/Post/my-photo.webp';

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
export type PostType = {
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

const userBlock: UserBlockType = {
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
};
const posts: Array<PostType> = [
	{
		id: v1(),
		avatarPhoto: avatarPhoto,
		avatarPhotoAlt: userBlock.avatarPhotoAlt,
		name: userBlock.name,
		date: '20 августа в 11:48',
		text: 'Жизнь это код, а код это кайф))',
		photo: photoPost,
		photoAlt: 'Пишу код в гамаке посреди сада абрикосов',
		likesCount: 5,
	},
];

ReactDOM.render(<App userBlock={userBlock} posts={posts} />, document.getElementById('root'));
