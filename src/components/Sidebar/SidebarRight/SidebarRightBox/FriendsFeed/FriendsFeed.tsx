import React from 'react';
import {NavLink} from "react-router-dom";
import {FriendType} from "../../../../../redux/state";
import s from './FriendsFeed.module.css';

type PropsType = {
	state: Array<FriendType>
	filter: 'all' | 'online'
}

const FriendsFeed = (props: PropsType) => {
	if(props.filter === 'online') {
		console.log('online');
	}

	return (
		<>
			<h2 className={s.title}>Друзья онлайн<span className={s.friendsCount}>2</span></h2>
			<ul className={s.friendsList}>
				{
					props.state.map(f => {
						const name = f.name.split(' ')[0];

						if(f.status) {
							return (
								<li className={s.friendsListItem} key={f.id}>
									<NavLink className={s.link} to={f.id}>
										<figure className={s.figure}>
											<div className={s.img}>
												<img className={s.photo} src={f.avatar} alt={f.name}/>
											</div>
											<figcaption className={s.name}>{name}</figcaption>
										</figure>
									</NavLink>
								</li>
							)
						}
					})
				}
			</ul>
		</>
	);
};

export default FriendsFeed;
