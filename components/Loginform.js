import React from 'react'
//import styles from './conteudo.css'

export default props =>
    <>
        <h3 className="titulo">Login Form</h3>

        <input
            className="Input"
            type="email"
            name="email"
            placeholder="Email"
        />

        <input
            className="Input"
            type="password"
            name="password"
            placeholder="Password"
        />

        <div className="RePass">
            <form>
                <input
                    className="InputCheckBox"
                    type="checkbox"
                    name="checkbox"
                    value="Remember me">
                </input>
                <label className="LabelCheckBox">Lembrar-me</label>
            </form>

            <a className="LinkPassword" href="https://www.google.com" target="_blank">Esqueceu a senha?</a>
        </div>

        <button className="ButtonLogin" type="submit">Login</button>


    </>
