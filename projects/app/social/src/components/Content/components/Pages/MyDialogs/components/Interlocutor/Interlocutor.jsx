//Импорт общих настроек
import React from 'react';
import { Link } from 'react-router-dom';

//Импорт стилей
import './css/Interlocutor.css';

//Импорт компонентов
import Avatar from '../../../../../../../common_files/components/Avatar/Avatar';

function Interlocutor(props) {
  return (
    <>
      <Link to={`/dialogs/${props.id}`} className="interlocutors__interlocutor interlocutor">
        <Avatar style={props.extraStyleAvatar} />
        <p className="interlocutor__name name">{props.userName}</p>
        {/* В зависимости от наличия непрочитанных сообщений выполняется отрисовка тэга */}
        {
          props.totalMessages === ""
            ? <p className="totalMassages" style={{ display: 'none' }} />
            : <p className="interlocutor__totalMassages totalMassages">{props.totalMessages}</p>
        }
      </Link>
    </>
  )
}

export default Interlocutor;