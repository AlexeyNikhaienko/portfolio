//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/ResponseMessage.css';

//Импорт компонентов
import Avatar from '../../../../../../../common_files/components/Avatar/Avatar';

function ResponseMessage(props) {
  return (
    <>
      <li className="dialogItem__message message">
        <div className="message__messageBody messageBody messageBody--bcg__blue">
          <header className="messageBody__messageHeader messageHeader">
            <p className="name">{props.userName}</p>
            <p className="date">
              <time dateTime="2020-06-01 17:00">1 час назад</time>
            </p>
          </header>
          <p className="messageText">{props.message}</p>
          <div className="messageBody__shape shape shape--pos__right"></div>
        </div>
        <Avatar style={props.extraStyleAvatar} />
      </li>
    </>
  )
}

export default ResponseMessage;