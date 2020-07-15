//Импорт общих настроек
import { connect } from 'react-redux';

//Импорт компонентов
import MyNewsFeed from '../components/Pages/MyNewsFeed/MyNewsFeed';

//Импорт action creators
import { updateNewPostText_AC, addPost_AC } from '../../../management/reducers/newsFeed-reducer';

function mapStateToProps(state) {
  return {
    newsFeed: state.newsFeedPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewPostText: postText => {
      dispatch(updateNewPostText_AC(postText));
    },
    publishPost: () => {
      dispatch(addPost_AC());
    }
  }
}

export const MyNewsFeed_c = connect(mapStateToProps, mapDispatchToProps)(MyNewsFeed);