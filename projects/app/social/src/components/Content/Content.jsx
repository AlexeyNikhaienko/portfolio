//Импорт компонентов общих настроек
import React from "react";
import {Switch, Route} from "react-router-dom"

//Импорт стилей
import "./css/Content.css";

//Импорт компонентов
import Navbar from "./components/Navbar/Navbar";
import MyNewsFeed from "./components/Pages/MyNewsFeed/MyNewsFeed";
import MyProfile from "./components/Pages/MyProfile/MyProfile";
import MyFriends from "./components/Pages/MyFriends/MyFriends";
import MyDialogs from "./components/Pages/MyDialogs/MyDialogs";
import MyImages from "./components/Pages/MyImages/MyImages";
import MyVideos from "./components/Pages/MyVideos/MyVideos";
import MyMusic from "./components/Pages/MyMusic/MyMysic";
import MySettings from "./components/Pages/MySettings/MySettings";

const Content = (props) => {
  return (
    <main className="main__content content">
      <Navbar />
      <div className="wrap">
        <Switch>
          <Route path="/mynewsfeed" render={() => <MyNewsFeed />} />
          <Route path="/profile" render={() => <MyProfile />} />
          <Route path="/friends" render={() => <MyFriends />} />
          <Route path="/dialogs" render={() => <MyDialogs />} />
          <Route path="/images" render={() => <MyImages />} />
          <Route path="/videos" render={() => <MyVideos />} />
          <Route path="/music" render={() => <MyMusic />} />
          <Route path="/settings" render={() => <MySettings />} />
        </Switch>
      </div>
    </main>
  );
}

export default Content;