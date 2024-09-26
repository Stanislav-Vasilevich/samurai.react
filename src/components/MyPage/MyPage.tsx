import React from 'react';
import s from './MyPage.module.css';
import UserBlock from './User/User';
import Post from "./Post/Post";
import SidebarRight from "../Sidebar/SidebarRight/SidebarRight";
import {StateType} from '../../redux/state';

type PropsType = {
	state: StateType
}

const MyPage = (props: PropsType) => {
	return (
		<main>
			<UserBlock userBlock={props.state.homePage.userBlock}/>
			<div className={s.mainContentAndRightSidebar}>
				<div className={s.mainContent}>
					{props.state.homePage.posts.map(t => {
						return (
							<Post
								key={t.id}
								avatarPhoto={t.avatarPhoto}
								avatarPhotoAlt={t.avatarPhotoAlt}
								name={t.name}
								date={t.date}
								title={t.title}
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
		</main>
	);
};

export default MyPage;
