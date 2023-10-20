import React from 'react';
import s from './UserBlock.module.css';
import {UserBlockType} from "../../../redux/state";

type PropsType = {
	userBlock: UserBlockType
}

const UserBlock = (props: PropsType) => {
  return (
    <div className={s.user__block}>
      <div className={s.user__background}>
        <img className={s.user__photo} src={props.userBlock.backgroundPhoto} alt={props.userBlock.backgroundPhotoAlt}/>
      </div>
      <div className={s.user__info}>
        <div className={s.user__avatar}>
          <img className={s.user__photo} src={props.userBlock.avatarPhoto} alt={props.userBlock.avatarPhotoAlt}/>
        </div>
        <div className={s.user__textBlock}>
          <h1 className={s.user__name}>{props.userBlock.name}</h1>
          <div className={s.user__status}>
            <a className={s.user__statusLink} href={props.userBlock.statusLink} target="_blank">
							{props.userBlock.statusLink}
						</a>
						{props.userBlock.statusText}
          </div>
          <div className={s.user__map}>
            <img className={s.user__mapIcon} src={props.userBlock.pointMapIcon} alt={props.userBlock.pointMapIconAlt}/>
            <a className={s.user__mapText} href="#">{props.userBlock.town}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBlock;
