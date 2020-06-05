//Импорт общих настроек
import React from 'react';

//Импорт стилей
import styles from './css/ProfileOwner.module.css';

//Импорт компонентов
import Avatar from '../Avatar/Avatar';

class ProfileOwner extends React.Component {
  render() {
    //Дополнительные стили для аватарки
    const extraStylesAvatar = {
      position: 'absolute',
      left: '5%',
      zIndex: 1,
      width: '70px',
      border: '5px solid #fff',
      ...this.props.extraStylesAvatar
    }

    //Дополнительные стили, класс для блока
    let extraClassName = this.props.extraClassName;
    const extraStylesBlock = this.props.extraStylesBlock

    return (
      <div
          className={`${styles.content__profileOwner} ${styles.profileOwner} ${styles[extraClassName]}`} 
          style={extraStylesBlock}
      >
        <Avatar style={extraStylesAvatar} />
        {this.props.children}
      </div>
    )
  }
}

export default ProfileOwner;