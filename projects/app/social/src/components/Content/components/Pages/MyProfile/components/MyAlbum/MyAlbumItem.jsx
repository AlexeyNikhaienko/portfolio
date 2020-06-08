//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/MyAlbumItem.css';

class MyAlbumItem extends React.Component {
  render() {
    return (
      <figure className="myAlbum__myAlbumItem myAlbumItem">
        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
      </figure>
    )
  }
}

export default MyAlbumItem;