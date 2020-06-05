//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MyFriendItem.css';

//Импорт компонентов
import ProfileOwner from '../../../../../../../common_files/components/ProfileOwner/ProfileOwner';
import UserInfo from '../../../../../../../common_files/components/UserInfo/UserInfo';

class MyFriendItem extends React.Component {
  render() {
    //Дополнительные стили для аватарки
    const extraStylesAvatar = {
      bottom: '-25%'
    }

    const bcg = {
      backgroundColor: '#999999'
    };

    return (
      <figure className="myFriends__friend friend">
        <ProfileOwner extraStylesAvatar={extraStylesAvatar} extraStylesBlock={bcg} />
        <figcaption className="friend__friendInfo friendInfo">
          <UserInfo>
            <p className="userifo__friendName friendName">{this.props.friendInfo.friendName}</p>
            <p className="occupation">{this.props.friendInfo.occupation}</p>
          </UserInfo>
        </figcaption>
        <div className="friend__btnWrapper btnWrapper">
          <button className="btnWrapper__unfriendBtn unfriendBtn btn">{this.props.btnTitle.remove}</button>
          <button className="addFriendBtn btn">{this.props.btnTitle.add}</button>
        </div>
      </figure>
    )
  }
}

export default MyFriendItem;