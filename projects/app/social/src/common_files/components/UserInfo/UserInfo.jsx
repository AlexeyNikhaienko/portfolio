//Импорт общих настроек
import React from 'react';

//Импорт стилей
import styles from './css/UserInfo.module.css';

function UserInfo(props) {
  return (
    <div className={`${styles.user__userInfo} ${styles.userInfo}`}>
      {props.children}
    </div>
  )
}

export default UserInfo;