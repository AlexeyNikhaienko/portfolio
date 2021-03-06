//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/AddNewPostArea.css';

//Импорт компонентов
import Avatar from '../../../../../../../common_files/components/Avatar/Avatar';

//Дополнительные стили для аватарки
const extraStyles = {
  width: '60px',
  height: '60px'
}

function AddNewPostArea(props) {
  let onPostTextChange = e => {
    let postText = e.target.value;
    props.updateNewPostText(postText);
  }

  let onPublishPostClick = e => {
    //Чтобы форма ТОЛЬКО публиковала пост (без автоматической отправки на сервер)
    e.preventDefault();
    props.publishPost();
  }

  return (
    <div className="newsFeed__newPost wrapper">
      <Avatar style={extraStyles} />
      <form
        className="newPost__messageForm messageForm"
        id="messageForm"
        onSubmit={onPublishPostClick}
      >
        <textarea
          className="inputField inputField--border__none"
          name="textField"
          onChange={onPostTextChange}
          value={props.newPostText}
          placeholder="Текст сообщения"
          rows="4"
        />
        <div className="messageForm__addFiles addFiles btn">
          <button className="addFiles__addFile addFile btn" type="button">m</button>
          <button className="addFiles__addFile addFile btn" type="button">v</button>
          <button className="addFiles__addFile addFile btn" type="button">p</button>
          <button className="submit btn" type="submit" form="messageForm">Опубликовать</button>
        </div>
      </form>
    </div>
  )
}

export default AddNewPostArea;