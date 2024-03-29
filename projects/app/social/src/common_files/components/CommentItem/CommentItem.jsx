//Импорт общих настроек
import React from 'react';

//Импорт стилей
import styles from './css/CommentItem.module.css';

class CommentItem extends React.Component {
  render() {
    return(
      <div className={`${styles.inner__comment } ${styles.comment}`}>
        <div className={`${styles.comment__commentHeader} ${styles.commentHeader}`}>
          <p className={`${styles.userName}`}>{this.props.data.userName}</p>
          <p className={`${styles.date}`}><time dateTime="2020-06-01 17:00">1 час назад</time></p>
          <span></span>
        </div>
        <p className={`${styles.descript}`}>{this.props.data.textComment}</p>
        <div className={`${styles.comment__shape} ${styles.shape}`}></div>
      </div>
    )
  }
}

export default CommentItem;