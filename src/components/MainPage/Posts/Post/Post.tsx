import React from 'react';
import s from './Post.module.css';
import avatar from './avatar.webp';
import photo from './my-photo.webp';
import iconLikes from './icon-likes.svg';

const Post = () => {
  return (
    <div className={s.post}>
      <header className={s.post__header}>
        <div className={s.post__avatar}>
          <img className={s.post__avatarPhoto} src={avatar} alt="user avatar"/>
        </div>
        <div className={s.post__userInfo}>
          <h2 className={s.post__userName}>Станислав Василевич</h2>
          <div className={s.post__time}>20 августа в 11:48</div>
        </div>
        <div className={s.post__change}>
          <span className={s.post__changePoint}></span>
          <span className={s.post__changePoint}></span>
          <span className={s.post__changePoint}></span>
        </div>
      </header>
      <main className={s.body}>
        <p className={s.post__text}>Жизнь это код, а код это кайф))</p>
        <div className={s.post__img}>
          <img className={s.post__photo} src={photo} alt="Stanislav Vasilevich in the photo of the post in the hammock"/>
        </div>
      </main>
      <footer className={s.post__footer}>
        <div className={s.post__likes}>
          <div className={s.post__icon}>
            <img className={s.post__iconPhoto} src={iconLikes} alt="icon of post lacquers"/>
          </div>
          <div className={s.post__likesCount}>4</div>
        </div>
      </footer>
    </div>
  );
};

export default Post;
