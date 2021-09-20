import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

export default function NavBar(){
  return(

    <>
    <Navbar bg="light" variant="light" fixed="top">
    <Container>
    <Navbar.Brand href="#home">PPgSI</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/Profile">Perfil</Nav.Link>
      <Nav.Link href="/Forms">Formulários</Nav.Link>
      <NavDropdown title="Alunos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/ActiveStudents">Ativos</NavDropdown.Item>
        <NavDropdown.Item href="/InactiveStudents">Desligados</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/Email">E-mails</Nav.Link>

    </Nav>
    </Container>
  </Navbar>

    </>
  )
}
