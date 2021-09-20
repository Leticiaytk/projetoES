import React from 'react';
import css from './Profile.module.scss';
import Navbar from '../components/Navbar';
import {Tabs, Tab} from 'react-bootstrap';

class Profile extends React.Component{
  render(){
    return (
      <div className={css.container}>
        <Navbar/>
          <div className={css.content}>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="profile" title="Perfil">
                <div className={css.infos}>
                  Informações do aluno

                </div>
              </Tab>
              <Tab eventKey="edit" title="Editar">
              <div className={css.infos}>
                  Editar as informações do aluno

                </div>
              </Tab>
            </Tabs>
          </div>
      </div>
  )
  }
}

export default Profile;
