import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import SidebarLeft from './components/Sidebar/SidebarLeft/SidebarLeft';
import MessagesPage from './components/MessagesPage/MessagesPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import Communities from './components/Communities/Communities';
import PhotoPage from './components/PhotoPage/PhotoPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import NewsPage from './components/NewsPage/NewsPage';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className={`${s.main__content}`}>
        <SidebarLeft/>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/news'} element={<NewsPage/>}/>
          <Route path={'/messages'} element={<MessagesPage/>}/>
          <Route path={'/friends'} element={<FriendsPage/>}/>
          <Route path={'/communities'} element={<Communities/>}/>
          <Route path={'/photo'} element={<PhotoPage/>}/>
          <Route path={'/*'} element={<Error404/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
