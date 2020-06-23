//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MyImages.css';

//Импорт изображений
import img1 from '../../../../../common_files/img/ma1.jpg';
import img2 from '../../../../../common_files/img/post1.jpg';
import img3 from '../../../../../common_files/img/ma2.jpg';
import img4 from '../../../../../common_files/img/ma3.jpg';

//Импорт компонентов
import LikedImage from './components/LikedImage';

function MyImages(props) {
  //Дополнительные стили для аватарки
  const extraStylesAvatar = {
    width: '50px',
    height: '50px',
    marginRight: '3.87%'
  }

  /*let likedImagesList = props.likedImage.map(image => (
    <LikedImage
      imgSrc={image.imgSrc}
      imgAlt={image.imgAlt}
      extraStylesAvatar={image.extraStylesAvatar}
      userName={image.userName}
      groupTitle={image.groupTitle}
    />));*/

  return (
    <div className="wrap__myImages myImages wrapper">
      <LikedImage
        imgSrc={img1}
        imgAlt="Бонсай"
        extraStylesAvatar={extraStylesAvatar}
        userName="User-2"
        groupTitle="Друзья"
      />
      <LikedImage
        imgSrc={img3}
        imgAlt="Вид на гору"
        extraStylesAvatar={extraStylesAvatar}
        userName="User-5"
        groupTitle="Друзья"
      />
      <LikedImage
        imgSrc={img2}
        imgAlt="Компас"
        extraStylesAvatar={extraStylesAvatar}
        userName="User-5"
        groupTitle="Друзья"
      />
      <LikedImage
        imgSrc={img4}
        imgAlt="Неоновая вывеска"
        extraStylesAvatar={extraStylesAvatar}
        userName="User-5"
        groupTitle="Друзья"
      />
      <LikedImage
        imgSrc={img2}
        imgAlt="Компас"
        extraStylesAvatar={extraStylesAvatar}
        userName="User-5"
        groupTitle="Друзья"
      />
      <LikedImage
        imgSrc={img3}
        imgAlt="Вид на гору"
        extraStylesAvatar={extraStylesAvatar}
        userName="User-5"
        groupTitle="Друзья"
      />
    </div>
  )
}

export default MyImages;