import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import SidebarLeft from './components/Sidebar/SidebarLeft/SidebarLeft';
import MessagesPage from './components/MessagesPage/MessagesPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import {Route, Routes} from 'react-router-dom';
import NewsPage from './components/NewsPage/NewsPage';
import {StateType} from './redux/state';
import HomePage from './components/HomePage/HomePage';
import CommunitiesPage from './components/CommunitiesPage/CommunitiesPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PhotosPage from './components/PhotosPage/PhotosPage';

type PropsType = {
  state: StateType
}

function App(props: PropsType) {
  return (
    <>
      <Header/>
      <div className={`${s.content}`}>
        <SidebarLeft links={props.state.sideBar.links}/>
        <Routes>
          <Route path="/"
                 element={<HomePage mainContent={props.state.homePage} sidebarRight={props.state.friendsPage}/>}/>
          <Route path="/news"
                 element={<NewsPage mainContent={props.state.newsPage} sidebarRight={props.state.friendsPage}/>}/>
          <Route path="/messages"
                 element={<MessagesPage friendsPage={props.state.friendsPage} messagePage={props.state.messagesPage}
                                        sidebarRight={props.state.friendsPage}/>}/>
          <Route path="/friends"
                 element={<FriendsPage state={props.state.friendsPage} sidebarRight={props.state.friendsPage}/>}/>
          <Route path="/communities" element={<CommunitiesPage sidebarRight={props.state.friendsPage}/>}/>
          <Route path="/photos" element={<PhotosPage sidebarRight={props.state.friendsPage}/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
