import React from 'react';
import {NavLink} from 'react-router-dom';
import {FriendType} from '../../../../../redux/state';
import s from './FriendsFeed.module.css';
import iconOnlinePhone from './../../../../../img/page/main/sidebar-right/friends/icon-phone-online.webp';

type PropsType = {
  state: Array<FriendType>
  filter?: 'online'
  title: string
}

const FriendsFeed = (props: PropsType) => {
  const onlineFriends = props.state.filter(f => f.status);
  const allFriends = props.state;

  return (
    <>
      {
        props.filter === 'online'
          ? <h2 className={s.title}>{props.title}<span className={s.friendsCount}>{onlineFriends.length}</span></h2>
          : <h2 className={s.title}>{props.title}<span className={s.friendsCount}>{allFriends.length}</span></h2>
      }

      <ul className={s.friendsList}>
        {
          props.filter === 'online'
            ? onlineFriends.map(f => {
              const name = f.name;

              return (
                <li className={s.friendsListItem} key={f.id}>
                  <NavLink className={s.link} to={String(f.id)}>
                    <figure className={s.figure}>
                      <div className={s.img}>
                        <img className={s.photo} src={f.avatar} alt={f.name}/>
                      </div>
                      <div className={s.phoneImg}>
                        <img className={s.phoneIcon} src={iconOnlinePhone} alt="Иконка онлайн пользователя"/>
                      </div>
                      <figcaption className={s.name}>{name}</figcaption>
                    </figure>
                  </NavLink>
                </li>
              )
            })
            : allFriends.map(f => {
              const name = f.name.split(' ')[0];

              return (
                <li className={s.friendsListItem} key={f.id}>
                  <NavLink className={s.link} to={String(f.id)}>
                    <figure className={s.figure}>
                      <div className={s.img}>
                        <img className={s.photo} src={f.avatar} alt={f.name}/>
                      </div>
                      <figcaption className={s.name}>{name}</figcaption>
                    </figure>
                  </NavLink>
                </li>
              )
            })
        }
      </ul>
    </>
  );
};

export default FriendsFeed;
