import React from 'react';
import s from './MainPage.module.css';
import UserBlock from './UserBlock/UserBlock';
import Posts from './Posts/Posts';

const MainPage = () => {
  return (
    <div className={s.mainContent}>
      <UserBlock/>
      <Posts/>
      {/*<SidebarRight/>*/}
    </div>
  );
};

export default MainPage;
