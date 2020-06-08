//Импорт общих настроек
import React from 'react';

//Импорт стилей
import styles from './css/UserInfo.module.css';

function UserInfo(props) {
  //Дополнительные стили для компонента
  const extraStyles = props.extraStyles;

  return (
    <div className={`${styles.user__userInfo} ${styles.userInfo}`} style={extraStyles}>
      {props.children}
    </div>
  )
}

export default UserInfo;