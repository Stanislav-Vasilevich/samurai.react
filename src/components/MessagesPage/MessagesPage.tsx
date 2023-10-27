import React from 'react';
import s from './MessagesPage.module.css';
import {v1} from 'uuid';
import Message from './Message/Message';
import one from './Message/one.jpg';
import two from './Message/two.jpg';
import three from './Message/three.jpg';
import four from './Message/four.jpg';
import five from './Message/five.jpg';
import six from './Message/six.jpg';
import {FriendsPageType, MessagesPageType} from '../../redux/state';
import {Route, Routes} from 'react-router-dom';
import MessagePage from './Message/MessagePage/MessagePage';

type PropsType = {
  stateFriends: FriendsPageType
  stateMessage: MessagesPageType
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
    text: 'Куда скинуть бабок? На тинькоф или на сбер?',
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
  return (
    <div className={s.mainContent}>
      <ul className={s.list}>
        {
          props.stateFriends.friends.map(i => {
            return (
              <Message key={i.id} id={i.id} avatar={i.avatar} name={i.name} surname={i.surname} text={props.stateMessage.message[i.id]}/>
            )
          })
        }
      </ul>

      <div className={s.routes}>
        {
          props.stateFriends.friends.filter(f => {
            return (
            <Routes key={f.id}>
              <Route path={`/${f.name}-${f.surname}`} element={<MessagePage/>}/>
            </Routes>
            )
          })
        }
      </div>
    </div>
  );
};

export default MessagesPage;
