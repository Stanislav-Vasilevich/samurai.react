import React from 'react';
import s from './HomePage.module.css';
import UserBlock from './User/User';
import Post from './Post/Post';
import SidebarRight from '../Sidebar/SidebarRight/SidebarRight';
import {FriendsPageType, HomePageType} from '../../redux/state';

type PropsType = {
	mainContent: HomePageType
	sidebarRight: FriendsPageType
}

const HomePage = (props: PropsType) => {
	return (
		<main>
			<UserBlock userBlock={props.mainContent.userBlock}/>
			<div className={s.mainContentAndRightSidebar}>
				<div className={s.posts}>
					{props.mainContent.posts.map(t => {
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
				<SidebarRight sidebarRight={props.sidebarRight.friends}/>
			</div>
		</main>
	);
};

export default HomePage;
