import React from 'react';
import {FriendsPageType, NewsPageType} from '../../redux/state';
import Post from '../HomePage/Post/Post';
import SidebarRight from '../Sidebar/SidebarRight/SidebarRight';
import s from './NewsPage.module.css';

type PropsType = {
  mainContent: NewsPageType
  sidebarRight: FriendsPageType
}

const NewsPage = (props: PropsType) => {
  return (
    <main className={s.main}>
      <div>
        {props.mainContent.posts.map(i => {
          return <Post
            key={i.id}
            avatarPhoto={i.avatarPhoto}
            avatarPhotoAlt={i.avatarPhotoAlt}
            name={i.name}
            date={i.date}
            title={i.title}
            text={i.text}
            photo={i.photo}
            photoAlt={i.photoAlt}
            likesCount={i.likesCount}
          />
        })}
      </div>
      <SidebarRight sidebarRight={props.sidebarRight.friends}/>
    </main>
  );
};

export default NewsPage;
