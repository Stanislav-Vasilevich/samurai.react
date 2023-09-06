import React from 'react';
import s from './MainContent.module.css';
import UserBlock from './UserBlock/UserBlock';

const MainContent = () => {
  return (
    <div className={s.mainContent}>
      <UserBlock/>
      {/*<SidebarRight/>*/}
    </div>
  );
};

export default MainContent;
