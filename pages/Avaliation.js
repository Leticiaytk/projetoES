import React from 'react';
import css from './Avaliation.module.scss';
import Navbar from '../components/Navbar';
import {Form, FloatingLabel, Button} from 'react-bootstrap';


class Avaliation extends React.Component{
  render(){
    return (
      <div className={css.container}>
        <Navbar/>
          <div className={css.content}>

            <h3>Avaliação do aluno</h3>

            <div className={css.wrapper}>
            <Form.Select aria-label="Avaliação">
              <option value="1">Adequado</option>
              <option value="2">Adequado com ressalvas</option>
              <option value="3">Insatisfatório</option>
            </Form.Select>
            <br/>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Comentários"
                style={{ height: '100px' }}
              />
            </FloatingLabel>

            <br/>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
            </div>
          </div>
      </div>
  )
  }
}

export default Avaliation;
