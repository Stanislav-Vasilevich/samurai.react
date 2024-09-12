import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import SidebarLeft from './components/Sidebar/SidebarLeft/SidebarLeft';
import MessagesPage from './components/MessagesPage/MessagesPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import Communities from './components/CommunitiesPage/CommunitiesPage';
import PhotoPage from './components/PhotoPage/PhotoPage';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import NewsPage from './components/NewsPage/NewsPage';
import Error404 from './components/ErrorPage404/ErrorPage404';
import {StateType} from "./redux/state";

type PropsType = {
	state: StateType
}

function App(props: PropsType) {
  return (
    <>
      <Header/>
      <div className={`${s.main__content}`}>
        <SidebarLeft/>

				{/* main content page */}
        <Routes>
          <Route path={'/'} element={<MainPage state={props.state}/>}/>
          <Route path={'/news'} element={<NewsPage/>}/>
          <Route path={'/messages'} element={<MessagesPage stateFriends={props.state.friendsPage} stateMessage={props.state.messagesPage}/>}/>
          <Route path={'/friends'} element={<FriendsPage/>}/>
          <Route path={'/communities'} element={<Communities/>}/>
          <Route path={'/photo'} element={<PhotoPage/>}/>
          <Route path={'/*'} element={<Error404/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
