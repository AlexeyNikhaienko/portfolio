import React from "react";
import {NavLink} from "react-router-dom";

import "./css/Navbar.css";

const Navbar = (props) => {
  return (
    <aside className="aside">
      <nav className="navbar">
        <ul className="list">
          <li className="item">
            <NavLink to="/mynewsfeed" activeClassName="active" className="link">Моя лента</NavLink>
          </li>
          <li className="item">
            <NavLink to="/profile" activeClassName="active" className="link">Профиль</NavLink>
          </li>
          <li className="item">
            <NavLink to="/friends" activeClassName="active" className="link">Друзья</NavLink>
          </li>
          <li className="item">
            <NavLink to="/dialogs" activeClassName="active" className="link">Сообщения</NavLink>
          </li>
          <li className="item">
            <NavLink to="/images" activeClassName="active" className="link">Изображения</NavLink>
          </li>
          <li className="item">
            <NavLink to="/videos" activeClassName="active" className="link">Видео</NavLink>
          </li>
          <li className="item">
            <NavLink to="/music" activeClassName="active" className="link">Музыка</NavLink>
          </li>
          <li className="item">
            <NavLink to="/settings" activeClassName="active" className="link">Настройки</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;