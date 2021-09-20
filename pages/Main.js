import React from 'react';
import css from './LoginCadastro.module.scss';
import Navbar from '../components/Navbar';

class Main extends React.Component{
  render(){
    return (
      <div className={css.container}>
        <Navbar/>
          <div className={css.content}>
          </div>
      </div>
  )
  }
}

export default Main;
