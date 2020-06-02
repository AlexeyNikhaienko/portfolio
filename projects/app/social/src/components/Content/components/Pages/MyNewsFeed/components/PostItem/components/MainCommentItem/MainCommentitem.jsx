//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MainCommentItem.css';

//Импорт компонентов
import Avatar from '../../../../../../../../../common_files/components/Avatar/Avatar';
import CommentItem from '../../../../../../../../../common_files/components/CommentItem/CommentItem';

class MainCommentItem extends React.Component {
  render() {
    //Дополнительные стили для аватарки
    const extraStyles = {
      width: '50px',
      height: '50px'
    }

    return (
      <>
        <li className="commentsWrap__mainComment mainComment">
          <div className="mainComment__inner">
            <Avatar style={extraStyles} />
            <CommentItem userName={this.props.userName} />
          </div>
          <ol className="mainComment__commentsWrap commentsWrap commentsWrap--width__short">
            {this.props.children}
          </ol>
        </li>
      </>
    )
  }
}

export default MainCommentItem;