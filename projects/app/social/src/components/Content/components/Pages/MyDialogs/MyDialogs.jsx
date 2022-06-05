//Импорт общих настроек
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Импорт стилей
import './css/MyDialogs.css';

//Импорт компонентов
import Interlocutor from './components/Interlocutor/Interlocutor';
import StartMessage from './components/StartMessage/StartMessage';
import ResponseMessage from './components/ResponseMessage/ResponseMessage';

function MyDialogs(props) {
  //Дополнительные стили для аватарки
  const extraStyleAvatar = {
    width: '50px'
  }

  //Преобразование входящих данных в следующие компоненты:
  //список собеседников
  /*let listInterlocutors = props.interlocutors.map(interlocutor => (
    <Interlocutor
      key={props.interlocutor.id}
      extraStyleAvatar={extraStyleAvatar}
      userName={props.interlocutor.userName}
      totalMessages={props.interlocutor.totalMessage}
      id={props.interlocutor.id}
    />)
  )*/

  return (
    <div className="wrap__myDialogs myDialogs wrapper">
      {/* <ol className="listInterlocutors">
        {interlocutors}
      </ol> */}
      <div className="interlocutors">
        <Interlocutor 
          extraStyleAvatar={extraStyleAvatar}
          userName="User-2"
          totalMessages="3"
          id="1"
        />
        <Interlocutor
          extraStyleAvatar={extraStyleAvatar}
          userName="User-3"
          totalMessages=""
          id="2"
        />
      </div>
      <div className="dialogs">
        <Switch>
          <Route path="/dialogs/1" render={() => (
            <ol className="dialogItem">
              <StartMessage
                extraStyleAvatar={extraStyleAvatar}
                userName="User-2"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, est."
              />
              <ResponseMessage
                extraStyleAvatar={extraStyleAvatar}
                userName="User-1"
                message="Lorem ipsum dolor sit amet."
              />
              <StartMessage
                extraStyleAvatar={extraStyleAvatar}
                userName="User-2"
                message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate numquam sunt soluta quos porro eligendi nam accusamus a atque incidunt."
              />
              <StartMessage
                extraStyleAvatar={extraStyleAvatar}
                userName="User-2"
                message="Lorem, ipsum dolor?"
              />
              <StartMessage
                extraStyleAvatar={extraStyleAvatar}
                userName="User-2"
                message="Lorem ipsum dolor sit amet consectetur adipisicing."
              />
            </ol>
          )} />
          <Route path="/dialogs/2" render={() => (
            <ol className="dialogItem">
              <StartMessage
                extraStyleAvatar={extraStyleAvatar}
                userName="User-3"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, est."
              />
              <ResponseMessage
                extraStyleAvatar={extraStyleAvatar}
                userName="User-1"
                message="Lorem ipsum dolor sit amet."
              />
            </ol>
          )} />
        </Switch>
        <div className="sendMessage">
          <textarea className="inputField inputField--rounding inputField--border__none" placeholder="Текст сообщения" rows="1" />
          <button type="button" className="submit btn">Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default MyDialogs;