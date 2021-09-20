import React from 'react';
import css from './LoginCadastro.module.scss';
import Loginform from '../components/Loginform';
import SignUpForm from '../components/SignUpForm';

class LoginCadastro extends React.Component{
  render(){
    return (
      <div className={css.container}>
          <div className={css.content}>
            <div className={css.login}>
              <Loginform></Loginform>
            </div>

            <div className={css.signUp}>
              <SignUpForm></SignUpForm>
            </div>
          </div>
      </div>
  )
  }
}

export default LoginCadastro;
