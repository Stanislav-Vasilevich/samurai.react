import {NavLink} from 'react-router-dom';
import s from '../SidebarLeft.module.css';
import React from 'react';
import styles from './NavSidebarLeft.module.css';

type PropsType = {
  path: string
  src: string
  alt: string
  text: string
}

const NavSidebarLeft = (props: PropsType) => {
  return (
    <NavLink to={props.path} className={s.listItem}>
      <img src={props.src} alt={props.alt}/>
      <span>{props.text}</span>
    </NavLink>
  )
}

export default NavSidebarLeft;
