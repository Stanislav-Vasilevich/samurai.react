import React from 'react';
import s from '../MessagesPage.module.css';

type PropsType = {
  name: string
  text: string
  avatar: string
  alt: string
  date: string
}

const Message = (props: PropsType) => {
  return (
    <li className={s.message}>
      <div className={s.img}>
        <img className={s.avatar} src={props.avatar} alt={props.alt}/>
      </div>
      <div className={s.body}>
        <h2 className={s.name}>{props.name}</h2>
        <div className={s.text}>{props.text}</div>
        <div className={s.date}>{props.date}</div>
      </div>
    </li>
  );
};

export default Message;
