//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MyAlbum.css';

//Импорт изображений
import ma1 from './img/ma1.jpg';
import ma2 from './img/ma2.jpg';
import ma3 from './img/ma3.jpg';

//Импорт компонентов
import MyAlbumItem from './MyAlbumItem';

function MyAlbum(props) {
  return(
    <div className="aboutMePages__myAlbum myAlbum">
      <MyAlbumItem imgSrc={ma1} imgAlt="Бонсай" />
      <MyAlbumItem imgSrc={ma2} imgAlt="Вид на гору" />
      <MyAlbumItem imgSrc={ma3} imgAlt="Неоновая вывеска" />
      <MyAlbumItem imgSrc={ma3} imgAlt="Неоновая вывеска" />
      <MyAlbumItem imgSrc={ma2} imgAlt="Вид на гору" />
      <MyAlbumItem imgSrc={ma1} imgAlt="Бонсай" />
      <MyAlbumItem imgSrc={ma2} imgAlt="Вид на гору" />
      <MyAlbumItem imgSrc={ma3} imgAlt="Неоновая вывеска" />
      <MyAlbumItem imgSrc={ma1} imgAlt="Бонсай" />
      <MyAlbumItem imgSrc={ma3} imgAlt="Неоновая вывеска" />
      <MyAlbumItem imgSrc={ma1} imgAlt="Бонсай" />
      <MyAlbumItem imgSrc={ma2} imgAlt="Вид на гору" />
    </div>
  )
}

export default MyAlbum;