import React from 'react';
import s from './SidebarRight.module.css';
import {FriendType} from "../../../redux/state";
import SidebarRightBox from "./SidebarRightBox/SidebarRightBox";

type PropsType = {
	sidebarRight: Array<FriendType>
}

const SidebarRight = (props: PropsType) => {
	console.log('props: ', props);

	return (
		<div className={s.sidebarRight}>
			<SidebarRightBox sidebarRight={props.sidebarRight}/>
		</div>
	);
};

export default SidebarRight;
