import React from 'react';
import s from './MainPage.module.css';
import UserBlock from './UserBlock/UserBlock';
import {PostType, UserBlockType} from "../../index";
import Post from "./Post/Post";

type PropsType = {
	userBlock: UserBlockType
	posts: Array<PostType>
}

const MainPage = (props: PropsType) => {
	return (
		<div className={s.mainContent}>
			<UserBlock userBlock={props.userBlock}/>
			{props.posts.map(t => {
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
			{/*<SidebarRight/>*/}
		</div>
	);
};

export default MainPage;
