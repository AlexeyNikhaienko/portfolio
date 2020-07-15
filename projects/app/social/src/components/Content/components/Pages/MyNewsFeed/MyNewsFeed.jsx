//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MyNewsFeed.css';

//Импорт компонентов
import AddNewPostArea from './components/AddNewPostArea/AddNewPostArea';
import PostItem from './components/PostItem/PostItem';

function MyNewsFeed(props) {
  /**
   * Приходящий массива с постами преобразовывается в ленту и разворачивается,
   * чтобы посты отображались в порядке их публикации (т.е. последний пост в state становится
   * первым в ленте)
   */
  let postsList = props.newsFeed.myPosts.map(post => <PostItem key={post.id} postData={post} />).reverse();

  return (
    <div className="newsFeed">
      <AddNewPostArea
        newPostText={props.newsFeed.newPostText}
        updateNewPostText={props.updateNewPostText}
        publishPost={props.publishPost}
      />
      {/* В зависимости от наличия постов в массиве выполянется отрисовка контента */}
      {
        props.newsFeed.myPosts.length > 0 ? <>{postsList}</> : <p>У пользователя нет активных постов</p>
      }
    </div>
  )
}

export default MyNewsFeed;