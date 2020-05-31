//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/FollowersList.css';

//Импорт компонентов
import Follower from './Follower';

function FollowersList(props) {
  return (
    <aside className="content__followersList aside followersList">
      <h2 className="followersList__heading heading">Подписчики
        <span className="heading__line line line--short" />
      </h2>
      <div className="followers">
        <Follower userName="User-1" />
        <Follower userName="User-2" />
        <Follower userName="User-3" />
        <Follower userName="User-4" />
        <Follower userName="User-5" />
      </div>
    </aside>
  )
}

export default FollowersList;