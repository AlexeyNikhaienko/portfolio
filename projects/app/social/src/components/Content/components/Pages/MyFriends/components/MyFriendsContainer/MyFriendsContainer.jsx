//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MyFriendsContainer.css';

function MyFriendsContainer(props) {
  return (
    <div className="wrapper__myFriendsContainer myFriendsContainer">
      {props.children}
    </div>
  )
}

export default MyFriendsContainer;