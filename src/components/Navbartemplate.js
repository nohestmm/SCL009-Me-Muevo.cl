import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Navbartemplate extends React.Component {

  render() {
    return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">
          <img src="http://www.memuevo.cl/wp-content/themes/newmemuevo/img/logo.png"
            width="90" height="70" className="d-inline-block align-top" alt="">
          </img></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav><Link to="/">Inicio</Link></Nav>
            <Nav><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></Nav>
            <Nav><Link to="/noticias">Noticias</Link></Nav>
            <Nav><Link to="/registro">Registro de Pacientes</Link></Nav>
            <Nav><Link to="/quienes-somos">Quiénes Somos</Link></Nav>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="🔎 Buscar" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navbartemplate;