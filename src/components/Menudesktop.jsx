import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Col } from 'react-bootstrap';
import logo from '../image/logo.png';

class Menudesktop extends React.Component {
    render() {
        return (
      
            <Col xs = {12} md ={3}>

<ListGroup>
<ListGroup.Item><Link to="/"><img src= {logo}
           className="d-inline-block align-top" alt="">
          </img></Link></ListGroup.Item>
  <ListGroup.Item><Link to="/quienes-somos">Quiénes Somos</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/">Artritis Remautoide</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/ley-ricarte-soto">Ges/Auge</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/registro">Registro de Pacientes</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/noticias">Noticias y Eventos</Link></ListGroup.Item>
</ListGroup>
</Col>

        )
    


}
}

export default Menudesktop;