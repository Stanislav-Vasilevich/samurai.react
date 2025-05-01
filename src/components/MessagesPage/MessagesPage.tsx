import React from 'react';
import s from './MessagesPage.module.css';
import {v1} from 'uuid';
import MessagesList from './MessagesList/MessagesList';
import one from './MessagesList/one.jpg';
import two from './MessagesList/two.jpg';
import three from './MessagesList/three.jpg';
import four from './MessagesList/four.jpg';
import five from './MessagesList/five.jpg';
import six from './MessagesList/six.jpg';
import {FriendsPageType, MessagesPageType} from '../../redux/state';
import {Route, Routes} from 'react-router-dom';
import Message from './Message/Message';

type PropsType = {
	friendsPage: FriendsPageType
	messagePage: MessagesPageType
}

export type userType = {
	id: string
	name: string
	text: string
	photo: string
	alt: string
	date: string
}

const data: Array<userType> = [
	{
		id: v1(),
		name: 'Олег Соболев',
		text: 'Давай приезжай, я в деле однозначно!',
		photo: one,
		alt: 'avatar one',
		date: '22 сен',
	},
	{
		id: v1(),
		name: 'Алексей Етеревсков',
		text: 'Ну ты иде есть?',
		photo: two,
		alt: 'avatar two',
		date: '12 авг',
	},
	{
		id: v1(),
		name: 'Антон Борисенко',
		text: 'Можешь создать сайт, где все мне платят на карту?',
		photo: three,
		alt: 'avatar two',
		date: '20 июл',
	},
	{
		id: v1(),
		name: 'Вирса Петровна',
		text: 'Мяу мяу мяу. Мяу мяу мяу мяу мяу мяу мяу!',
		photo: four,
		alt: 'avatar two',
		date: '1 июн',
	},
	{
		id: v1(),
		name: 'Игорь Юдинцев',
		text: 'Я в отпуске, как приду будем потеть!',
		photo: five,
		alt: 'avatar two',
		date: '1 июн',
	},
	{
		id: v1(),
		name: 'Елена Кильянова',
		text: 'Это что на озоне? Много там, я много не понесу!',
		photo: six,
		alt: 'avatar two',
		date: '18 апр',
	},
]

const MessagesPage = (props: PropsType) => {
	console.log('props: ', props.friendsPage.friends[0].id);
	return (
		<main>
			{/* здесь должна загрузиться либо MessagesList, либо Message */}
			<Routes>
				<Route path={`/`}
							 element={
					<ul className="wrapper">
						{
							props.friendsPage.friends.map(i => {
								return (
									<MessagesList key={i.id} id={i.id} avatar={i.avatar} name={i.name} surname={i.surname}
																text={props.messagePage.message[i.id]}/>
								)
							})
						}
					</ul>
				}/>

				{/*<Route path={`/messages/${props.friendsPage.friends[0].id}`}*/}
				{/*			 element={<Message/>}/>*/}
			</Routes>
		</main>
	);
};

export default MessagesPage;
