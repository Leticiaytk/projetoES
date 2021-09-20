import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function SignUp(){
  const [informacoes, setInformacoes] = useState({});

    const setInformacoesForm = (event) => {
        event.persist();
        setInformacoes(informacoes => ({...informacoes, [event.target.name]: event.target.value}));
    }

    const sign = async event => {
        event.preventDefault();
		    console.log(informacoes);
        const {name, email, password } = { informacoes };
        if (informacoes.email == '' || informacoes.nome == '' || informacoes.senha == '' ) {
          alert('Errou tudo, preencha email ou senha');
          return;
      }
      axios.post('http://localhost:5000/users', informacoes).then(response => {
        if(response.data.logged) alert('Usuário cadastrado com sucesso');
        else alert('Atenção! Usuário cadastrado')
        });
    }

  return(
    <>
    <h3> Cadastro</h3>
       <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" name="name" value={informacoes.name} onChange={setInformacoesForm}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="mail@exemple.com" name="email" value={informacoes.email} onChange={setInformacoesForm}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" value={informacoes.password} onChange={setInformacoesForm}/>
        </Form.Group>

        <Form.Select size="sm">
            <option>Aluno</option>
            <option>Professor</option>
            <option>CCP</option>
         </Form.Select>

        <Button variant="primary" type="submit" onClick={sign}>
          Cadastrar
        </Button>
      </Form>

    </>
  )
  }
