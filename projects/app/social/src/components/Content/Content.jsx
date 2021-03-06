//Импорт общих настроек
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

//Импорт стилей
import './css/Content.css';

//Импорт компонентов
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import { MyNewsFeed_c } from './containers/MyNewsFeed_c';
import MyProfile from './components/Pages/MyProfile/MyProfile';
import MyFriends from './components/Pages/MyFriends/MyFriends';
import MyDialogs from './components/Pages/MyDialogs/MyDialogs';
import MyImages from './components/Pages/MyImages/MyImages';
import MyVideos from './components/Pages/MyVideos/MyVideos';
import MyMusic from './components/Pages/MyMusic/MyMysic';
import MySettings from './components/Pages/MySettings/MySettings';
import FollowersList from './components/FollowersList/FollowersList';

function Content(props) {
  return (
    <main className="main__content content">
      <LeftSidebar />
      <div className="wrap">
        <Switch>
          <Redirect exact from="/" to="/mynewsfeed" />
          <Route path="/mynewsfeed" render={() => <MyNewsFeed_c />} />
          <Route path="/profile" render={() => <MyProfile />} />
          <Route path="/friends" render={() => <MyFriends />} />
          <Route path="/dialogs" render={() => <MyDialogs />} />
          <Route path="/images" render={() => <MyImages />} />
          <Route path="/videos" render={() => <MyVideos />} />
          <Route path="/music" render={() => <MyMusic />} />
          <Route path="/settings" render={() => <MySettings />} />
        </Switch>
      </div>
      <FollowersList />
    </main>
  );
}

export default Content;