import React from 'react';
import s from './Message.module.css';

type Props = {
	friend: string
}

const Message = (props: Props) => {
	console.log('props: ', props)

	return (
		<div className={s.mainContent}>
			{props}
		</div>
	)
}

export default Message;
