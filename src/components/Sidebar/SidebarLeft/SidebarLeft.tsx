import React, {FC} from 'react';
import s from './SidebarLeft.module.css';
import {SideBarLinkType} from "../../../redux/state";
import NavSidebarLeft from "./NavSidebarLeft/NavSidebarLeft";

type PropsType = {
	links: Array<SideBarLinkType>
}

const SidebarLeft: FC<PropsType> = (props) => {
  return (
    <div className={s.sidebarLeft}>
      <ul className={s.list}>
        {
					props.links.map(i => {
             return <NavSidebarLeft key={i.id} path={i.path} src={i.src} alt={i.alt} text={i.text}/>
          })
        }
      </ul>
    </div>
  );
};

export default SidebarLeft;
