import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Routeapp from './Routeapp'
class Navbarmobile extends React.Component {

  constructor(props){
    super(props)
    this.state={
clickone :this.props.home,
clicktwo: this.props.ar



    }

this.onClickone = this.onClickone.bind(this) 

this.onClicktwo = this.onClicktwo.bind(this)
  }


onClickone(home){
 console.log(this.state.clickone)
this.setState({clickone: home})

}
onClicktwo (ar){
   console.log(this.state.clicktwo)
  this.setState({clickone: ar})
 
}

  render() {
    return (

      <>
      <Navbar className="bgNav" expand="lg">
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav><Link to="/quienes-somos">Nosotros</Link></Nav>
           <Nav ><Link to="/artritis-reumatoide">Artritis Reumatoide</Link></Nav>
           <Nav ><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></Nav>
           <Nav ><Link to="/ges">Ges/Auge</Link></Nav>
            <Nav ><Link to="/registro">Registro de Pacientes</Link></Nav>
            <Nav ><Link to="/noticias">Noticias y Eventos</Link></Nav> */}
            <Nav.Link
            onMouseEnter={() => this.onClickone(this.props.home)}>Home
            
              </Nav.Link>
            <Nav.Link 
             onMouseEnter={() => this.onClicktwo(this.props.ar)}>Artritis
              
              </Nav.Link>


          </Nav>
          <Form inline>
            <FormControl type="text" className="mr-sm-2" />
            <Button variant="light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Routeapp clickone ={this.state.clickone} clicktwo = {this.state.clicktwo}/>
      </>
    )
  }
}
export default Navbarmobile;