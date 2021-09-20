import React from 'react';
import css from './Email.module.scss';
import EmailForm from '../components/EmailForm';
import Navbar from '../components/Navbar';

class Email extends React.Component{
  render(){
    return (
      <div className={css.container}>
        <Navbar/>
          <div className={css.content}>
            <div className={css.info}>
              <EmailForm></EmailForm>
            </div>
          </div>
      </div>
  )
  }
}

export default Email;
