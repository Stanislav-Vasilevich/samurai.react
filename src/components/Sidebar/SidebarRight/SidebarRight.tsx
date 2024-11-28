import React from 'react';
import s from './SidebarRight.module.css';
import {FriendType} from "../../../redux/state";
import SidebarRightBox from "./SidebarRightBox/SidebarRightBox";

type PropsType = {
	state: Array<FriendType>
}

const SidebarRight = (props: PropsType) => {
	return (
		<div className={s.sidebarRight}>
			<SidebarRightBox state={props.state}/>
		</div>
	);
};

export default SidebarRight;
