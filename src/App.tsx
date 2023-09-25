import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import SidebarLeft from './components/Sidebar/SidebarLeft/SidebarLeft';
import MessagesPage from './components/MessagesPage/MessagesPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import Communities from './components/Communities/Communities';
import PhotoPage from './components/PhotoPage/PhotoPage';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className={`${s.main__content}`}>
        <SidebarLeft/>
        {/*<MainPage/>*/}
        {/*<NewsPage/>*/}
        {/*<MessagesPage/>*/}
        {/*<FriendsPage/>*/}
        {/*<Communities/>*/}
        <PhotoPage/>
      </main>
    </BrowserRouter>
  );
}

export default App;
