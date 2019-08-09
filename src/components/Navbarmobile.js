import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../image/logo.png';
import Routeapp from './Routeapp'





class Navbarmobile extends React.Component {
  constructor(props){
    super(props)
    this.state={
clickone :"",
clicktwo: "",
hoverone: "",
hovertwo: ""
    

    }
this.onHover = this.onHover.bind(this)
this.onClick = this.onClick.bind(this) 
this.onHovertwo = this.onHovertwo.bind(this)
this.onClicktwo = this.onClicktwo.bind(this)
  }

 onHover(home){
  this.setState({hoverone: home})
 console.log(this.state.hoverone)

  

}
onClick(home){
 
this.setState({clickone: home})
 console.log(this.state.clickone)
}
onClicktwo (ar){
  this.setState({clickone: ar})
  console.log(this.state.clicktwo)
}

onHovertwo (ar){
  this.setState({hovertwo: ar})
 console.log(this.state.hovertwo)
}

  

 
  render() {
    return (
   <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">
          <img src= {logo}
           className="d-inline-block align-top" alt="">
          </img></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
          
            onClick = {()=>this.onClick("/")}>
            {this.props.home}Home
            </Nav.Link>
            <Nav.Link
           
            onClick = {()=>this.onClicktwo("/artritis-reumatoide")}>
            Artritis Remautoide</Nav.Link>
           
           
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="🔎 Buscar" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Routeapp clickone ={this.state.clickone} clicktwo = {this.state.clicktwo}/>
     </>
    )
  }
}

export default Navbarmobile;