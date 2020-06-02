//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/PostItem.css';

//Импорт медиа-контента
import post from './mediaContent/post1.jpg';

//Импорт компонентов
import Avatar from '../../../../../../../common_files/components/Avatar/Avatar';
import UserInfo from '../../../../../../../common_files/components/UserInfo/UserInfo';
import MainCommentItem from './components/MainCommentItem/MainCommentitem';
import SubCommentItem from './components/SubCommentItem/SubCommentItem';

//Дополнительные стили для аватарки
const extraStyles = {
  width: '50px',
  height: '50px',
  marginRight: '1.26%'
}

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalViews: 0,
      totalComments: 0,
      totalLikes: 0,
      totalDislikes: 0
    }
  }

  render() {
    return (
      <div className="newsFeed__postWrap wrapper">
        <div className="postWrap__author">
          <Avatar style={extraStyles} />
          <UserInfo>
            <p className="userName userName--fs__m">{this.props.userName}</p>
            <p className="userInfo__date date">Published: <time dateTime="2020-06-01 17:00">June, 1 2020 5:00PM</time></p>
          </UserInfo>
        </div>
        <div className="mediaContent">
          <img src={post} alt="post" />
          <div className="statistics"></div>
          <p className="descript descript--extraSizes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero minus voluptates doloribus. Cupiditate eius aliquam, dicta quia dolorum harum, sequi aperiam quidem magni maxime ipsa. Magnam maiores, voluptas fuga atque ipsam qui minus dicta. Similique, at? Eveniet, voluptatem fugit?</p>
        </div>
        <CommentsList>
          <MainCommentItem userName="User-1">
            <SubCommentItem userName="User-2" />
            <SubCommentItem userName="User-3" />
          </MainCommentItem>
          <MainCommentItem userName="User-1" />
        </CommentsList>
      </div>
    )
  }
}

function CommentsList(props) {
  return(
    <ol className="postWrap__commentsWrap commentsWrap commentsWrap--width__full">
      {props.children}
    </ol>
  )
}

export default PostItem;