import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
class Navbarmobile extends React.Component {
  render() {
    return (
      <Navbar className="bgNav" expand="lg">
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav ><Link to="">Home</Link></Nav>
            <Nav ><Link to="/quienes-somos">Nosotros</Link></Nav>
            <Nav ><Link to="/artritis-reumatoide">Artritis Reumatoide</Link></Nav>
            <Nav ><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></Nav>
            <Nav ><Link to="/ges">Ges/Auge</Link></Nav>
            <Nav ><Link to="/registro">Registro de Pacientes</Link></Nav>
            <Nav ><Link to="/noticias">Noticias y Eventos</Link></Nav>
          </Nav>
          <Form inline>
           <FormControl type="text" className="mr-sm-2" placeholder="Buscar"/>
        
         </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navbarmobile;