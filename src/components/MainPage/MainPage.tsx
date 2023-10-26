import React from 'react';
import s from './MainPage.module.css';
import UserBlock from './UserBlock/UserBlock';
import Post from "./Post/Post";
import SidebarRight from "../Sidebar/SidebarRight/SidebarRight";
import {StateType} from '../../redux/state';

type PropsType = {
	state: StateType
}

const MainPage = (props: PropsType) => {
	return (
		<div className={s.mainContent}>
			<UserBlock userBlock={props.state.mainPage.userBlock}/>
			<div className={s.mainContentAndRightSidebar}>
				<div className={s.mainContent}>
					{props.state.mainPage.posts.map(t => {
						return (
							<Post
								key={t.id}
								avatarPhoto={t.avatarPhoto}
								avatarPhotoAlt={t.avatarPhotoAlt}
								name={t.name}
								date={t.date}
								text={t.text}
								photo={t.photo}
								photoAlt={t.photoAlt}
								likesCount={t.likesCount}
							/>
						)
					})}
				</div>
				<SidebarRight state={props.state.friendsPage.friends}/>
			</div>
		</div>
	);
};

export default MainPage;
