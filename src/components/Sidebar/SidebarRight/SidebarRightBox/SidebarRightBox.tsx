import React from 'react';
import {FriendType} from "../../../../redux/state";
import s from './SidebarRightBox.module.css';
import FriendsFeed from "./FriendsFeed/FriendsFeed";

type PropsType = {
	state: Array<FriendType>
}

const SidebarRightBox = (props: PropsType) => {
	return (
		<div className={s.box}>
			{/* online */}
			<FriendsFeed state={props.state} filter='online'/>

			<div className={s.hr}></div>

		{/*	offline */}
			<FriendsFeed state={props.state} filter='all'/>
		</div>
	);
};

export default SidebarRightBox;
