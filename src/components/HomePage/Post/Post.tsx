import React from 'react';
import s from './Post.module.css';
import iconLikes from './icon-likes.svg';

type PropsType = {
	avatarPhoto: string
	avatarPhotoAlt: string
	name: string
	date: string
	title: string
	text: string
	photo: string
	photoAlt: string
	likesCount: number
}

const Post = (props: PropsType) => {
	return (
		<article className={`wrapper ${s.post}`}>
			<header className={s.post__header}>
				<div className={s.post__avatar}>
					<img className={s.post__avatarPhoto} src={props.avatarPhoto} alt={props.avatarPhotoAlt}/>
				</div>
				<div className={s.post__userInfo}>
					<h2 className={s.post__userName}>{props.name}</h2>
					<div className={s.post__time}>{props.date}</div>
				</div>
				<div className={s.post__change}>
					<span className={s.post__changePoint}></span>
					<span className={s.post__changePoint}></span>
					<span className={s.post__changePoint}></span>
				</div>
			</header>
			<div className={s.post__body}>
				<h2 className={s.post__title}>{props.title}</h2>
				<p className={s.post__text}>{props.text}</p>
				<div className={s.post__img}>
					<img className={s.post__photo} src={props.photo}
							 alt={props.photoAlt}/>
				</div>
			</div>
			<footer className={s.post__footer}>
				<div className={s.post__likes}>
					<div className={s.post__icon}>
						<img className={s.post__iconPhoto} src={iconLikes} alt="Иконка сердечка лайка"/>
					</div>
					<div className={s.post__likesCount}>{props.likesCount}</div>
				</div>
			</footer>
		</article>
	);
};

export default Post;
