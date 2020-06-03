//Импорт общих настроек
import React from 'react';

//Импорт стилей
import styles from './css/ProfileOwner.module.css';
import bcg from './img/bcg1.jpg';

//Импорт компонентов
import Avatar from '../Avatar/Avatar';

class ProfileOwner extends React.Component {
  render() {
    //Дополнительные стили для аватарки
    const extraStyle = {
      position: 'absolute',
      left: '5%',
      top: '-50%',
      transform: 'translateY(25%)',
      zIndex: 1,
      width: '70px',
      border: '5px solid #fff'
    }

    //Дополнительные стили для блока
    const extraStyleBlock = {
      backgroundImage: `url(${bcg})`
    }

    return (
      <div className={`${styles.content__profileOwner} ${styles.profileOwner}`} style={extraStyleBlock}>
        <Avatar style={extraStyle} />
        {this.props.children}
      </div>
    )
  }
}

export default ProfileOwner;