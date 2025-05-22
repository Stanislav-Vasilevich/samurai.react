import React from 'react';
import MessagesList from './MessagesList/MessagesList';
import {Route, Routes} from 'react-router-dom';
import {FriendsPageType, MessagesPageType} from '../../redux/state';
import Message from './Message/Message';
import SidebarRight from '../Sidebar/SidebarRight/SidebarRight';
import styles from './MessagesPage.module.css';

type Props = {
  friendsPage: FriendsPageType
  messagePage: MessagesPageType
  sidebarRight: FriendsPageType
}

const MessagesPage = (props: Props) => {
  console.log('props: ', props.friendsPage.friends);
  return (
    <main>
      {/* здесь должна загрузиться либо MessagesList, либо Message */}
      <Routes>
        <Route path={`/`}
               element={
                 <div className={styles.row}>
                   <ul className="wrapper">
                     {
                       props.friendsPage.friends.map(i => {
                         return (
                           <MessagesList
                             key={i.id}
                             id={i.id}
                             avatar={i.avatar}
                             name={i.name}
                             surname={i.surname}
                             text={props.messagePage.message[i.id]}
                           />
                         )
                       })
                     }
                   </ul>
                   <SidebarRight sidebarRight={props.sidebarRight.friends}/>
                 </div>
               }/>

        <Route path={`/${props.friendsPage.friends[0].id}`}
               element={<Message friend={props.friendsPage.friends[0].id}/>}
        />
      </Routes>
    </main>
  );
};

export default MessagesPage;
