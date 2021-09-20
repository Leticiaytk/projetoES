import React from 'react';
import css from './Form.module.scss';
import Navbar from '../components/Navbar';
import {Form, Row, Col, Button, FloatingLabel} from 'react-bootstrap';

class Forms extends React.Component{
  render(){
    return (
      <div className={css.container}>
        <Navbar/>
          <div className={css.content}>
            <div className={css.form}>
              <Form>
              <h3> Dados Gerais</h3>
              <Row >
              <Form.Group className="mb-3" controlId="formGridName" as={Col}>
                <Form.Label>Nome</Form.Label>
                <Form.Control placeholder="Seu nome" />
              </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>

              <br/>

              <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridName2" as={Col}>
                <Form.Label>Nome do orientador</Form.Label>
                <Form.Control placeholder="Nome do orientador" />
              </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Número USP</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <br/>

              <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridName2" as={Col}>
                <Form.Label>Link para curriculum lattes</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Data da última atualização do lattes</Form.Label>
                  <Form.Control placeholder="EX: 7 de Janeiro de 2019" />
                </Form.Group>
              </Row>

              <br/>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Qual é o seu curso? </Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>Mestrado</option>
                  <option>Doutorado</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Qual o resultado da avaliação do seu último relatório? </Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>Aprovado</option>
                  <option>Aprovado com ressalvas</option>
                  <option>Insatisfatório</option>
                  <option>É meu primeiro relatório</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Esse relatório é referente a que semestre do seu curso? </Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>1º semestre</option>
                  <option>2º semestre</option>
                  <option>3º semestre</option>
                  <option>4º semetre</option>
                  <option>5º semetre</option>
                  <option>6º semetre</option>
                  <option>7º semetre</option>
                  <option>8º semetre</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <h3> Atividades Didáticas</h3>
              <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridName2" as={Col}>
                <Form.Label>Em quantas disciplinas obrigatórias você já obteve aprovação?</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Em quantas disciplinas optativas você já obteve aprovação?</Form.Label>
                  <Form.Control placeholder="EX: 7 de Janeiro de 2019" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Todos os conceitos em disciplinas cursadas no último semestre já foram
divulgados? Caso não, espere até 2 dias antes da data máxima definida no site
do PPgSI para enviar o seu relatório.</Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>Sim</option>
                  <option>Não</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Em quantas disciplinas você foi reprovado desde o início do mestrado/doutorado? </Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Em quantas disciplinas você foi reprovado no último semestre cursado? </Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>Já terminei as disciplinas</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Você foi aprovado no exame de proficiência de idiomas? </Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>Sim</option>
                  <option>Não</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <br/>
              <h3> Atividades de Pesquisa</h3>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Você já realizou o exame de qualificação?</Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>Sim. Fui aprovado.</option>
                  <option>Sim. Fui reprovado.</option>
                  <option>Não</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Se não qualificou, quanto tempo falta para o limite máximo de qualificação?</Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>Menos de 3 meses</option>
                  <option>Entre 3 e 6 meses</option>
                  <option>Mais de 6 meses</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Se você já fez sua qualificação e foi aprovado, quanto tempo falta para o limite
máximo do depósito da sua dissertação/tese?</Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>Menos de 3 meses</option>
                  <option>Entre 3 e 6 meses</option>
                  <option>Mais de 6 meses</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Quantos artigos referentes a sua pesquisa de mestrado/doutorado você teve
aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu
currículo Lattes)  </Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>Mais de 2</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Quantos artigos você submeteu e ainda estão aguardando resposta? </Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>Mais de 2</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Você possui artigo em preparação para submissão? Qual o estágio dele?</Form.Label>
                <Form.Select defaultValue="Escolher">
                  <option>Não possuo</option>
                  <option>Experimento em elaboração</option>
                  <option>Aguardando coleta de dados</option>
                  <option>Em fase de escrita</option>
                  <option>Em fase de tradução</option>
                  <option>Preparando resposta para os revisores</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <br/>
              <Row>
              <Form.Label> Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que
já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que
ainda incompleta). Faça uma descrição detalhada. </Form.Label>
              <FloatingLabel controlId="floatingTextarea">
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              </Row>

              <br/>

              <Row>
              <Form.Label> Você participou de algum congressos no país? Se sim, indicar local, se houve
apresentação de trabalho e se o congresso é ou não internacional. </Form.Label>
              <FloatingLabel controlId="floatingTextarea">
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              </Row>

              <br/>

              <Row>
              <Form.Label> Você participou de algum congresso no exterior? Se sim, indicar local e se
houve apresentação de trabalho. </Form.Label>
              <FloatingLabel controlId="floatingTextarea">
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              </Row>

              <br/>

              <Row>
              <Form.Label> Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior
(incluindo sanduíche)? Se sim, indique o nome da universidade e o período. </Form.Label>
              <FloatingLabel controlId="floatingTextarea">
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              </Row>

              <br/>

              <Row>
              <Form.Label> Você tem algo a mais a declarar para a CCP - PPgSI?</Form.Label>
              <FloatingLabel controlId="floatingTextarea">
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              </Row>

              <br/>

              <Row>
              <Form.Label> Comentários finais do ORIENTANDO sobre seu desempenho no último
semestre, considerando o relatório reapresentado:</Form.Label>
              <FloatingLabel controlId="floatingTextarea">
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              </Row>

              <br/><br/>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
          </Form>
            </div>
          </div>
      </div>
  )
  }
}

export default Forms;
