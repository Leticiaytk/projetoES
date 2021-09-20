import React from 'react';
import css from './ActiveStudents.module.scss';
import Navbar from '../components/Navbar';


class ActiveStudents extends React.Component{
  render(){
    return (
      <div className={css.container}>
        <Navbar/>
          <div className={css.content}>
            <h3> Alunos Ativos </h3>
          <div className = {css.wrapper}>
            <div className ={css.card}>
              <div className={css.cardTitle}>
                Aluno 1
              </div>

              <div className={css.options}>
              <a href="">
                Relátorio
              </a>

              <a href="/Avaliation">
                Avaliar
              </a>
              </div>
            </div>

            <div className ={css.card}>
              <div className={css.cardTitle}>
                Aluno 2
              </div>

              <div className={css.options}>
              <a href="">
                Relátorio
              </a>

              <a href="/Avaliation">
                Avaliar
              </a>
              </div>
            </div>


          </div>
          </div>
      </div>
  )
  }
}

export default ActiveStudents;
