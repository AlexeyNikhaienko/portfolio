//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MyNewsFeed.css';

//Импорт компонентов
import AddNewPostArea from './components/AddNewPostArea/AddNewPostArea';
import PostItem from './components/PostItem/PostItem';

function MyNewsFeed(props) {
  return (
    <div className="newsFeed">
      <AddNewPostArea />
      <PostItem userName="User-1"/>
    </div>
  )
}

export default MyNewsFeed;