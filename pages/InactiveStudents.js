import React from 'react';
import css from './InactiveStudents.module.scss';
import Navbar from '../components/Navbar';
import {Tabs, Tab} from 'react-bootstrap';

class InactiveStudents extends React.Component{
  render(){
    return (
      <div className={css.container}>
        <Navbar/>
          <div className={css.content}>
            <h3> Alunos Inativos </h3>
          <div className = {css.wrapper}>
            <div className ={css.card}>
              <div className={css.cardTitle}>
                Aluno 1
              </div>

              <a href="">
                Histórico
              </a>
            </div>

            <div className ={css.card}>
              <div className={css.cardTitle}>
                Aluno 2
              </div>

              <a href="">
                Histórico
              </a>
            </div>


          </div>
          </div>
      </div>
  )
  }
}

export default InactiveStudents;
