import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import SidebarLeft from './components/Sidebar/SidebarLeft/SidebarLeft';
import MessagesPage from './components/MessagesPage/MessagesPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import PhotoPage from './components/PhotoPage/PhotoPage';
import {Route, Routes} from 'react-router-dom';
import NewsPage from './components/NewsPage/NewsPage';
import Error404Page from './components/ErrorPage404/ErrorPage404';
import {StateType} from "./redux/state";
import MyPage from "./components/MyPage/MyPage";
import CommunitiesPage from "./components/CommunitiesPage/CommunitiesPage";

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
          <Route path='/' element={<MyPage mainContent={props.state.homePage} sidebarRight={props.state.friendsPage}/>}/>
          <Route path='/news' element={<NewsPage mainContent={props.state.newsPage} sidebarRight={props.state.friendsPage}/>}/>
          <Route path='/messages' element={<MessagesPage friendsPage={props.state.friendsPage} messagePage={props.state.messagesPage}/>}/>
          <Route path='/friends' element={<FriendsPage state={props.state.friendsPage}/>}/>
          <Route path='/communities' element={<CommunitiesPage/>}/>
          <Route path='/photo' element={<PhotoPage/>}/>
          <Route path='/*' element={<Error404Page/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
