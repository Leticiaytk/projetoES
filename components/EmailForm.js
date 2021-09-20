import React from 'react'
import {Form, Button} from 'react-bootstrap'
import emailjs from "emailjs-com";

export default function Email(){
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Service_TrabalhoES', 'template_cu23se7', e.target, 'user_QcalrBobPZDwaiN9zVHE6')
      .then((result) => {
          alert('Mensagem enviada com sucesso!')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
      return(
        <>
        <h3> Enviar e-mail</h3>
         <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" required name="name"placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" required placeholder="Seu email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" rows={3} required placeholder="Sua mensagem" name="message" />
          </Form.Group>

          <Button variant="primary" type="submit" value="Enviar mensagem">
            Enviar
          </Button>
        </Form>
        </>
      )
}

