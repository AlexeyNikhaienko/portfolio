//Импорт общих настроек
import React from 'react';
import {NavLink} from 'react-router-dom';

//Импорт стилей
import './css/NavigationBar.css';

function NavigationBar(props) {
  return (
    <nav className="aside__navbar navbar">
      <ul className="list">
        <li className="list__item item">
          <NavLink to="/mynewsfeed" activeClassName="active" className="link link--color__grey">Моя Лента</NavLink>
        </li>
        <li className="list__item item" activeClassName="active">
          <NavLink to="/profile" activeClassName="active" className="link link--color__grey">Профиль</NavLink>
        </li>
        <li className="list__item item">
          <NavLink to="/friends" activeClassName="active" className="link link--color__grey">Друзья</NavLink>
        </li>
        <li className="list__item item">
          <NavLink to="/dialogs" activeClassName="active" className="link link--color__grey">Сообщения</NavLink>
        </li>
        <li className="list__item item">
          <NavLink to="/images" activeClassName="active" className="link link--color__grey">Изображения</NavLink>
        </li>
        <li className="list__item item">
          <NavLink to="/videos" activeClassName="active" className="link link--color__grey">Видео</NavLink>
        </li>
        <li className="list__item item">
          <NavLink to="/music" activeClassName="active" className="link link--color__grey">Музыка</NavLink>
        </li>
        <li className="item">
          <NavLink to="/settings" activeClassName="active" className="link link--color__grey">Настройки</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar;