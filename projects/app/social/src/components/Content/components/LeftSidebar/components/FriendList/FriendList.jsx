//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/FriendList.css';

//Импорт компонентов
import Avatar from '../../../../../../common_files/components/Avatar/Avatar';

//Дополнительные стили для аватарки
const extraStyle = {
  width: '30%',
  marginBottom: '1.83%',//5px
  cursor: 'pointer'
}

function FriendList(props) {
  return (
    <section className="friendList">
      <h2 className="followersList__heading heading">Друзья
        <span className="heading__line line line--short" />
      </h2>
      <div className="friendList__container container">
        <Avatar style={extraStyle} />
        <Avatar style={extraStyle} />
        <Avatar style={extraStyle} />
        <Avatar style={extraStyle} />
        <Avatar style={extraStyle} />
        <Avatar style={extraStyle} />
      </div>
    </section>
  )
}

export default FriendList;