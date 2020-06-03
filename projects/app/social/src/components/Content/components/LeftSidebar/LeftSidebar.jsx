//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/LeftSidebar.css';

//Импорт компонентов
import ProfileOwner from '../../../../common_files/components/ProfileOwner/ProfileOwner';
import NavigationBar from './components/NavigationBar/NavigationBar';
import FriendList from './components/FriendList/FriendList';

function LeftSidebar(props) {
  return (
    <aside className="aside aside--bcg__transparent">
      <ProfileOwner>
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