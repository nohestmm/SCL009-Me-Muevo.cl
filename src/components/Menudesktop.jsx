import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Row, Col } from 'react-bootstrap';
import logo from '../image/logo.png';

class Menudesktop extends React.Component {
    render() {
        return (
                  <Row> 
            <Col xs={12} md={4}>

<ListGroup>
<ListGroup.Item><Link to="/"><img src= {logo}
            width="90" height="70" className="d-inline-block align-top" alt="">
          </img></Link></ListGroup.Item>
  <ListGroup.Item><Link to="/quienes-somos">Quiénes Somos</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/">Artritis Remautoide</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/ley-ricarte-soto">Ges/Auge</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/registro">Registro de Pacientes</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/noticias">Noticias y Eventos</Link></ListGroup.Item>
</ListGroup>
</Col>
</Row>
        )
    


}
}

export default Menudesktop;