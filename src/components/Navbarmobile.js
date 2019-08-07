import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../image/logo.png';


class Navbarmobile extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">
          <img src= {logo}
           className="d-inline-block align-top" alt="">
          </img></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav ><Link to="/quienes-somos">Qué es la A.R.?</Link></Nav>
            <Nav ><Link to="/">Artritis Remautoide</Link></Nav>
            <Nav ><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></Nav>
            <Nav ><Link to="/ley-ricarte-soto">Ges/Auge</Link></Nav>
             <Nav ><Link to="/registro">Registro de Pacientes</Link></Nav>
             <Nav ><Link to="/noticias">Noticias y Eventos</Link></Nav>
           
            
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

export default Navbarmobile;