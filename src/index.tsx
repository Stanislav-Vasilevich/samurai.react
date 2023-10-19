import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";

export type UserBlockType = {
	backgroundPhoto: string
	backgroundPhotoAlt: string
	avatarPhoto: string
	avatarPhotoAlt: string
	name: string
	statusLink: string
	statusText: string
	pointMapIcon: string
	pointMapIconAlt: string
	town: string
}
export type PostType = {
	id: string
	avatarPhoto: string
	avatarPhotoAlt: string
	name: string
	date: string
	text: string
	photo: string
	photoAlt: string
	likesCount: number
}

ReactDOM.render(
	<BrowserRouter>
		<App userBlock={state.userBlock} posts={state.posts} />
	</BrowserRouter>,
	document.getElementById('root'));
