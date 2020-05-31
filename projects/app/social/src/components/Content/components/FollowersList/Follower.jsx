//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/Follower.css';

//Импорт компонентов
import Avatar from '../../../../common_files/components/Avatar/Avatar';
import UserInfo from '../../../../common_files/components/UserInfo/UserInfo';

class Follower extends React.Component {
  render() {
    //Дополнительные стили для аватарки
    const extraStyle = {
      width: "50px",
      height: "50px"
    }

    return (
      <div className="followers__user user">
        <Avatar style={extraStyle} />
        <UserInfo>
          <p className="userName">{this.props.userName}</p>
          <button className="addFriend">Add Friend</button>
          <span className="userInfo__line line line--full" />
        </UserInfo>
      </div>
    )
  }
}

export default Follower;