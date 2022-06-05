//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/PostItem.css';

//Импорт компонентов
import Avatar from '../../../../../../../common_files/components/Avatar/Avatar';
import UserInfo from '../../../../../../../common_files/components/UserInfo/UserInfo';
import MainCommentItem from './components/MainCommentItem/MainCommentitem';

//Дополнительные стили для аватарки
const extraStyles = {
  width: '50px',
  height: '50px',
  marginRight: '1.26%'
}

function PostItem(props) {
  //На основе входящих данных автоматически генерируются комментарии
  let mainCommentsArray = props.postData.comments;
  let mainCommentsList = mainCommentsArray.map(item => <MainCommentItem key={item.id} data={item} />);

  return (
    <div className="newsFeed__postWrap wrapper">
      {/* Информация об авторе поста, время публикации поста */}
      <div className="postWrap__author">
        <Avatar style={extraStyles} />
        <UserInfo>
          <p className="userName userName--fs__m">{props.postData.userName}</p>
          <p className="userInfo__date date">Published: <time dateTime="2020-06-01 17:00">June, 1 2020 5:00PM</time></p>
        </UserInfo>
      </div>

      {/* Поле с медиаконтентом и статистикой к посту */}
      <div className="mediaContent">
        <img src={props.postData.mediaContent} alt="post" />
        <div className="mediaContent__statistics statistics">
          <span>Views: {props.postData.views}</span>
          <span>Comments: {props.postData.totalComments}</span>
          <span>Likes: {props.postData.likesCounter}</span>
          <span>Dislikes: {props.postData.dislikesCounter}</span>
        </div>
        <p className="descript descript--extraSizes">{props.postData.postDescription}</p>
      </div>

      {/* В зависимости от наличия комментариев в массиве выполянется отрисовка контента */}
      {mainCommentsArray.length > 0
        ? <ol
            className="postWrap__commentsWrap commentsWrap commentsWrap--width__full"
          >
            {mainCommentsList}
          </ol>
        : <p className="noContent">К данному посту нет комментариев</p>
      }

      {/* Поле для добавления комментария к посту */}
      <div className="postWrap__addComment addComment">
        <Avatar style={extraStyles} />
        <textarea
          className="inputField inputField--padding inputField--rounding"
          placeholder="Текст сообщения"
          rows="1"
        />
        <button type="button" className="submit btn">Отправить</button>
      </div>
    </div>
  )
}

export default PostItem;