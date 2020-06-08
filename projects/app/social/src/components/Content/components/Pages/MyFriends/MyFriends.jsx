//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MyFriends.css';

//Импорт компонентов
import MyFriendsContainer from './components/MyFriendsContainer/MyFriendsContainer';
import FriendRequestsContainer from './components/FriendRequestsContainer/FriendRequestsContainer';
import MyFriendItem from './components/MyFriendItem/MyFriendItem';

function MyFriends(props) {
  return (
    <div className="wrapper myFriends">
      <input type="radio" className="radio" id="myFriends" name="users" defaultChecked />
      <label className="myFriends__tabTitle tabTitle" htmlFor="myFriends">Мои Друзья</label>
      <span className="myFriends__totalRequests totalRequests">10</span>
      <input type="radio" className="radio" id="friendRequests" name="users" />
      <label className="myFriends__tabTitle tabTitle" htmlFor="friendRequests">Запросы В Друзья</label>
      <span className="totalRequests">15</span>
      <MyFriendsContainer>
        <MyFriendItem
            friendInfo={{friendName: 'User-2', occupation: 'Студент'}}
            btnTitle={{remove: 'Удалить', add: 'Добавить'}}
        />
        <MyFriendItem
            friendInfo={{friendName: 'User-3', occupation: 'Повар'}}
            btnTitle={{remove: 'Удалить', add: 'Добавить'}}
        />
        <MyFriendItem
            friendInfo={{friendName: 'User-4', occupation: 'Инженер'}}
            btnTitle={{remove: 'Удалить', add: 'Добавить'}}
        />
        <MyFriendItem
            friendInfo={{friendName: 'User-5', occupation: 'Художник и поэт'}}
            btnTitle={{remove: 'Удалить', add: 'Добавить'}}
        />
      </MyFriendsContainer>
      <FriendRequestsContainer>
        <MyFriendItem
            friendInfo={{friendName: 'User-2', occupation: 'Студент'}}
            btnTitle={{remove: 'Отклонить', add: 'Принять'}}
        />
        <MyFriendItem
            friendInfo={{friendName: 'User-3', occupation: 'Повар'}}
            btnTitle={{remove: 'Отклонить', add: 'Принять'}}
        />
        <MyFriendItem
            friendInfo={{friendName: 'User-4', occupation: 'Инженер'}}
            btnTitle={{remove: 'Отклонить', add: 'Принять'}}
        />
        <MyFriendItem
            friendInfo={{friendName: 'User-5', occupation: 'Актёр'}}
            btnTitle={{remove: 'Отклонить', add: 'Принять'}}
        />
      </FriendRequestsContainer>
    </div>
  )
}

export default MyFriends;