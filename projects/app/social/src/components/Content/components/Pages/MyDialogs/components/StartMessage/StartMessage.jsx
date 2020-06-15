//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/StartMessage.css';

//Импорт компонентов
import Avatar from '../../../../../../../common_files/components/Avatar/Avatar';

function StartMessage(props) {
  return (
    <>
      <li className="dialogItem__message message">
        <Avatar style={props.extraStyleAvatar} />
        <div className="message__messageBody messageBody messageBody--bcg__gray">
          <header className="messageBody__messageHeader messageHeader">
            <p className="name">{props.userName}</p>
            <p className="date">
              <time dateTime="2020-06-01 17:00">1 час назад</time>
            </p>
          </header>
          <p className="messageText">{props.message}</p>
          <div className="messageBody__shape shape shape--pos__left"></div>
        </div>
      </li>
    </>
  )
}

export default StartMessage;