//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/LeftSidebar.css';
import bcg from '../../../../common_files/img/bcg1.jpg';

//Импорт компонентов
import ProfileOwner from '../../../../common_files/components/ProfileOwner/ProfileOwner';
import NavigationBar from './components/NavigationBar/NavigationBar';
import FriendList from './components/FriendList/FriendList';

//Дополнительные стили/классы, применимые ТОЛЬКО в рамках компонента LeftSidebar:
//для аватарки
const extraStylesAvatar = {
  top: '-50%',
  transform: 'translateY(25%)'
}

//для компонента ProfileOwner:
const extraClassName = 'cover';
const extraStylesBlock = {
  backgroundImage: `url(${bcg})`,
  borderRadius: '8px',
  boxShadow: '0 0.3125em 0.625em #999999'
}

function LeftSidebar(props) {
  return (
    <aside className="content__aside aside aside--bcg__transparent">
      <ProfileOwner 
          extraStylesAvatar={extraStylesAvatar}
          extraClassName={extraClassName}
          extraStylesBlock={extraStylesBlock}
      >
        <section className="profileOwner__ownerInfo ownerInfo">
          <h2 className="ownerInfo__ownerName ownerName">User-1</h2>
          <p className="ownerInfo__totatFollowers totatFollowers">1370</p>
        </section>
      </ProfileOwner>
      <NavigationBar />
      <FriendList />
    </aside>
  )
}

export default LeftSidebar;