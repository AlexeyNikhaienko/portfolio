//Импорт общих настроек
import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

//Импорт стилей
import './css/MyProfile.css';
import profileImg from '../../../../../common_files/img/bcg1.jpg';

//Импорт компонентов
import ProfileOwner from '../../../../../common_files/components/ProfileOwner/ProfileOwner';
import UserInfo from '../../../../../common_files/components/UserInfo/UserInfo';
import AboutMe from './components/AboutMe/AboutMe';
import MyAlbum from './components/MyAlbum/MyAlbum';

//Дополнительные стили для компонента ProfileOwner
const extraStylesBlock = {
  height: '46.87vh',
  backgroundImage:`url(${profileImg})`
}

//Дополнительные стили для компонента UserInfo
const extraStyles = {
  width: '23.42%',
  textAlign: 'center'
}

//Дополнительные стили для аватарки
const extraStylesAvatar = {
  position: 'absolute',
  left: '2%',
  bottom: '-5%',
  zIndex: 1,
  width: '19.42%',
  border: '7px solid #fff'
}

function MyProfile(props){
  return (
    <div className="wrap__myProfile myProfile">
      <ProfileOwner extraStylesBlock={extraStylesBlock} extraStylesAvatar={extraStylesAvatar}>
        <nav className="profileOwner__userNav userNav">
          <ul className="userNav__list list list--width__short">
            <li>
              <NavLink 
                  to="/profile/aboutMe"
                  activeClassName="current"
                  className="link link--fs__s link--color__white">Обо Мне
              </NavLink>
            </li>
            <li>
              <NavLink 
                  to="/profile/myAlbum"
                  activeClassName="current"
                  className="link link--fs__s link--color__white">Мой Альбом
              </NavLink>
            </li>
          </ul>
          <ul className="userNav__list list list--width__short">
            <li className="element">1,370 Подписчиков</li>
            <li>
              <button className="btn btn--bcg__blue">Подписаться</button>
            </li>
          </ul>
        </nav>
      </ProfileOwner>
      <div className="myProfile__aboutMeWrap aboutMeWrap">
        <>
          <UserInfo extraStyles={extraStyles}>
            <p className="userInfo__userName userName">User-1</p>
            <p className="occupation">Инженер</p>
          </UserInfo>
        </>
        <div className="aboutMePages">
          <Switch>
            <Redirect exact from="/profile/" to="/profile/aboutMe" />
            <Route path="/profile/aboutMe" render={() => <AboutMe />} />
            <Route path="/profile/myAlbum" render={() => <MyAlbum />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;