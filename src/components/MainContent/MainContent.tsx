import React from 'react';
import s from './MainContent.module.css';
import UserBlock from './UserBlock/UserBlock';
import Posts from './Posts/Posts';

const MainContent = () => {
  return (
    <div className={s.mainContent}>
      <UserBlock/>
      <Posts/>
      {/*<SidebarRight/>*/}
    </div>
  );
};

export default MainContent;
