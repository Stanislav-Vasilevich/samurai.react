import React from 'react';
import s from '../MessagesPage.module.css';
import {NavLink} from 'react-router-dom';
import {messageType} from '../../../redux/state';

type PropsType = {
  id: number
  avatar: string
  name: string
  surname: string
  text: Array<messageType>
}

const MessagesList = (props: PropsType) => {
  return (
    <li className={s.message}>
      <NavLink className={s.link} to={`${props.id}`}>
        <div className={s.img}>
          <img className={s.avatar} src={props.avatar} alt={`${props.name} ${props.surname}`}/>
        </div>
        <div className={s.body}>
          <h2 className={s.name}>{props.name}</h2>
          <div className={s.text}>{props.text[props.text.length - 1].text}</div>
          <div className={s.date}>{props.text[props.text.length - 1].date}</div>
        </div>
      </NavLink>
    </li>
  );
};

export default MessagesList;
