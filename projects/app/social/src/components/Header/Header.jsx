//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/Header.css';

function Header(props) {
  return (
    <header className="body__header header">
      <p className="logo">
        <span className="upper">Net</span>
        <span className="lower">work<span className="lower--color__red">i</span>a</span>
      </p>
    </header>
  );
}

export default Header;