//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MainCommentItem.css';

//Импорт компонентов
import Avatar from '../../../../../../../../../common_files/components/Avatar/Avatar';
import CommentItem from '../../../../../../../../../common_files/components/CommentItem/CommentItem';
import SubCommentItem from '../SubCommentItem/SubCommentItem';

class MainCommentItem extends React.Component {
  render() {
    //На основе входящих данных автоматически генерируются ответные комментарии
    let replyCommentsArray = this.props.data.replyComments;
    let replyCommenstList = replyCommentsArray.map(item => <SubCommentItem key={item.id} data={item} />);

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
            <CommentItem data={this.props.data} />
          </div>
          
          {/* В зависимости от наличия комментариев в массиве выполянется отрисовка контента */}
          {
            replyCommentsArray.length > 0
            && <ol className="mainComment__commentsWrap commentsWrap commentsWrap--width__short">
                    {replyCommenstList}
                  </ol>
          }
        </li>
      </>
    )
  }
}

export default MainCommentItem;