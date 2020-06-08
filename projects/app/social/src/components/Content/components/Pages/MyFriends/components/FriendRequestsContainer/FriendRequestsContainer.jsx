//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/FriendRequestsContainer.css';

function FriendRequestsContainer(props) {
  return (
    <div className="wrapper__friendRequestsContainer friendRequestsContainer">
      {props.children}
    </div>
  )
}

export default FriendRequestsContainer;