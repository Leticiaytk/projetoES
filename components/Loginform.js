import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';

export default function Login(){
    const [informacoes, setInformacoes] = useState({});

    const setInformacoesForm = (event) => {
        event.persist();
        setInformacoes(informacoes => ({...informacoes, [event.target.name]: event.target.value}));
    }

    const login = async event => {
        event.preventDefault();
		   console.log(informacoes);
        const {email, password } = { informacoes };
        if (informacoes.email == '' || informacoes.senha == '' ) {
          alert('Errou tudo, preencha email ou senha');
          return;
      }
      axios.post('http://localhost:5000/login/', informacoes).then(response => {
        if(response.data.logged) alert('Usuário autenticado com sucesso');
        else alert('Atenção! E-mail ou senha inválidos')
        });
    }

  return(
    <>
    <h3> Login</h3>
       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" value={informacoes.email} onChange={setInformacoesForm}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" value={informacoes.senha} onChange={setInformacoesForm}/>
        </Form.Group>

        <Form.Group>
        <a href="https://www.google.com">Esqueci minha senha</a>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={login}>
          Entrar
        </Button>
      </Form>

    </>
  )
}
