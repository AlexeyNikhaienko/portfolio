//Импорт общих настроек
import React from 'react';

//Импорт стилей
import styles from './css/Avatar.module.css';

//Импорт аватарки
import avatar from './img/user.jpg';

function Avatar(props) {
  const extraStyles = props.style;

  return (
    <img src={avatar} className={styles.avatar} style={extraStyles} alt="avatar" />
  )
}

export default Avatar;