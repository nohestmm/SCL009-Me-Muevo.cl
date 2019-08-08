import React from 'react';
import '../views/components.css';
import { Row , Col, Container } from 'react-bootstrap';
import infoDesktop from '../image/infoDesktop.png';
const TemplateInfo = () => {
    
        return (
                <div>
                <section>
                <Container>
                  <Row>
                  <Col>
<h4>Artritis Reumatoide</h4>
                    </Col>
                  <Col xs = {12} md ={12}>
                       <img src={infoDesktop} className="imgAr" alt="Infografía de la Enfermedad"/>
                  </Col>
                   {/* <Col  xs = {12} md ={12}>
                        <img src={secondimgInfo} className="imgInfo" alt="Infografía de la Enfermedad"/>
                  </Col> */}
                   </Row>
                   </Container>
                </section>
            </div>
        )
    
}
export default TemplateInfo;
