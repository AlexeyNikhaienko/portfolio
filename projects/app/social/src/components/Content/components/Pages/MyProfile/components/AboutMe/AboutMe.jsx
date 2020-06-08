//Импорт общих настроек
import React from 'react';

//Импорт стилей
import './css/AboutMe.css';

function AboutMe(props) {
  return (
    <>
      <section className="aboutMePages__section section">
        <h2 className="section__heading heading">Личная Информация
          <span className="section__line line line--short" />
        </h2>
        <p className="descript">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam voluptates deleniti quia! Voluptatibus dolor autem nesciunt eum nisi quidem omnis repellendus recusandae assumenda! Nesciunt voluptatum consequatur itaque exercitationem omnis asperiores nam molestiae a excepturi, consectetur cupiditate doloremque repellendus sequi! Consequatur molestiae, aliquam hic asperiores aperiam ut voluptatibus ullam incidunt saepe.</p>
      </section>
      <section className="aboutMePages__section section">
        <h2 className="section__heading heading">Опыт работы
          <span className="section__line line line--short" />
        </h2>
      </section>
      <section className="aboutMePages__section section">
        <h2 className="section__heading heading">Где нахожусь
          <span className="section__line line line--short" />
        </h2>
      </section>
      <section className="aboutMePages__section section">
        <h2 className="section__heading heading">Интересы
          <span className="section__line line line--short" />
        </h2>
      </section>
    </>
  )
}

export default AboutMe;