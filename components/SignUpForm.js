import React from 'react';
//import styles from './conteudo.css';

export default props =>
    <>
        <h3 className="titulo">Cadastro</h3>

        <input
            className="Input"
            type="text"
            name="FirstName"
            placeholder="Nome"
        />

        <input
            className="Input"
            type="email"
            name="email"
            placeholder="mail@exemple.com"
        />

        <input
            className="Input"
            type="password"
            name="password"
            placeholder="Senha"
        />

        <input
            className="Input"
            type="password"
            name="ConfirmPassword"
            placeholder="Confirme sua senha"
        />

        <button className="ButtonSignUp" type="submit">Inscrever</button>
    </>
