import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

export default App;
