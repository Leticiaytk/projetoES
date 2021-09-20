import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default props =>
    <>
    <h3> Login</h3>
       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Form.Group>
        <a href="/">Esqueci minha senha</a>
        </Form.Group>

        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>

    </>
