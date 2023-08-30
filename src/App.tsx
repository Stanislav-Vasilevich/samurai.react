import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SidebarLeft from './components/Sidebar/SidebarLeft/SidebarLeft';
import SidebarRight from './components/Sidebar/SidebarRight/SidebarRight';
import MainContent from './components/MainContent/MainContent';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="main">
          <SidebarLeft/>
          <MainContent/>
          <SidebarRight/>
        </div>
      </div>
    </div>
  );
}

export default App;
