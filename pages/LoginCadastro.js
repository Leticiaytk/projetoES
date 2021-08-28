import React from 'react';
//import styles from './loginCadastro.css';
import Loginform from '../components/Loginform';
import SignUpForm from '../components/SignUpForm';

class LoginCadastro extends React.Component{
  render(){
    return (
      <div className='box'>
          <div className='Conteudo'>
              <div className='loginForm'>
                  <Loginform />
              </div>
              <div className='signUpForm'>
                  <SignUpForm />
              </div>
          </div>
          <div className='Footer'>
              <p> Trabalho Semestral de Engenharia de Software</p>
          </div>
      </div>
  )
  }
}

export default LoginCadastro;
