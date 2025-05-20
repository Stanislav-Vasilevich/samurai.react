import React from 'react';
import MessagesList from './MessagesList/MessagesList';
import {Route, Routes} from 'react-router-dom';

const MessagesPage = (props) => {
	console.log('props: ', props.friendsPage.friends[0].id);
	return (
		<main>
			{/* здесь должна загрузиться либо MessagesList, либо Message */}
			<Routes>
				<Route path={`/`}
							 element={
					<ul className="wrapper">
						{
							props.friendsPage.friends.map(i => {
								return (
									<MessagesList key={i.id} id={i.id} avatar={i.avatar} name={i.name} surname={i.surname}
																text={props.messagePage.message[i.id]}/>
								)
							})
						}
					</ul>
				}/>

				{/*<Route path={`/messages/${props.friendsPage.friends[0].id}`}*/}
				{/*			 element={<Message/>}/>*/}
			</Routes>
		</main>
	);
};

export default MessagesPage;
