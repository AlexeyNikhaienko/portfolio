//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/SubCommentItem.css';

//Импорт компонентов
import Avatar from '../../../../../../../../../common_files/components/Avatar/Avatar';
import CommentItem from '../../../../../../../../../common_files/components/CommentItem/CommentItem';

class SubCommentItem extends React.Component {
  render() {
    //Дополнительные стили для аватарки
    const extraStyles = {
      width: '50px',
      height: '50px'
    }

    return(
      <>
        <li className="commentsWrap__followerComment followerComment">
          <Avatar style={extraStyles} />
          <CommentItem userName={this.props.userName} />
        </li>
      </>
    )
  }
}

export default SubCommentItem;