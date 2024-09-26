import React from 'react';
import {FriendsPageType} from "../../redux/state";
import s from './FriendsPage.module.css';

type PropsType = {
	state: FriendsPageType
}

const FriendsPage = (props: PropsType) => {
	return (
		<main>
			<div className="wrapper">
				<ul className={s.list}>
					{
						props.state.friends.map(f => {
							return (
								<li className={s.item} key={f.id}>
									<div className={s.avatar}>
										<img className={`photo ${s.photo}`} src={f.avatar} alt={f.name}/>
									</div>
									<div className={s.info}>
										<a className={`${s.link} ${s.name}`} href={`/${f.id}`}>{f.name}</a>
										<a className={`${s.link}`} href="#">Написать сообщение</a>
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		</main>
	);
};

export default FriendsPage;
