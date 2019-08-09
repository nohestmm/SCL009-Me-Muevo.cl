import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../image/logo.png'
class Navbarmobile extends React.Component {
 render() {
   return (
     <Navbar className="bgNav" expand="lg">
       <Navbar.Brand>
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
         <Nav><Link to="/">
                 <img src={logo} 
                  alt="Logo de la Fundación">
                 </img></Link></Nav>
           <Nav ><Link to="/quienes-somos">Nosotros</Link></Nav>
           <Nav ><Link to="/artritis-reumatoide">Artritis Reumatoide</Link></Nav>
           <Nav ><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></Nav>
           <Nav ><Link to="/ges">Ges/Auge</Link></Nav>
            <Nav ><Link to="/registro">Registro de Pacientes</Link></Nav>
            <Nav ><Link to="/noticias">Noticias y Eventos</Link></Nav>
         </Nav>
         
       </Navbar.Collapse>
     </Navbar>
   )
 }
}
export default Navbarmobile;