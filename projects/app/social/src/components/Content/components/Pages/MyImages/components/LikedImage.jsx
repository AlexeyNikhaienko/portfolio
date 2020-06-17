//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/LikedImage.css';

//Импорт компонентов
import Avatar from '../../../../../../common_files/components/Avatar/Avatar';
import UserInfo from '../../../../../../common_files/components/UserInfo/UserInfo';

function LikedImage(props) {
  return (
    <figure className="myImages__likedImage likedImage">
      <img src={props.imgSrc} alt={props.imgAlt} className="picture" />
      <figcaption className="extraInfo">
        <div className="extraInfo__statistics statistics statistics--border__btm"></div>
        <div className="extraInfo__authorInfo authorInfo">
          <Avatar style={props.extraStylesAvatar} />
          <UserInfo>
            <p className="userInfo__userName userName userName--fs__m">{props.userName}</p>
            <p className="group">{props.groupTitle}</p>
          </UserInfo>
        </div>
      </figcaption>
    </figure>
  )
}

export default LikedImage;