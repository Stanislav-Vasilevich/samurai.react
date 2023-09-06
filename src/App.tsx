import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import SidebarLeft from './components/Sidebar/SidebarLeft/SidebarLeft';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <>
      <Header/>
      <main className={`${s.main__content}`}>
        <SidebarLeft/>
        <MainContent/>
      </main>
    </>
  );
}

export default App;
