//Импорт компонентов общих настроек
import React from 'react';

//Импорт стилей
import './App.css';

//Импорт компонентов
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

export default App;