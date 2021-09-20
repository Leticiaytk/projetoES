import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default props =>
    <>
    <h3> Cadastro</h3>
       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Form.Select size="sm">
            <option>Aluno</option>
            <option>Professor</option>
            <option>CCP</option>
         </Form.Select>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>

    </>
