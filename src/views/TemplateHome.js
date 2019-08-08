import React from 'react'
import '../views/components.css';
import { Row, Col, Container } from 'react-bootstrap';
import imgHands from '../image/imgHands.jpg';
// import secondimgInfo from '../image/secondimgInfo.jpg';
const TemplateHome = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
          
                        <Col xs={12} md={12}>

                            <img src={imgHands} className="imgInfo" alt="Infografía de la Enfermedad" />
                            <h3 className="text-home">La Artritis Reumatoide es una enfermedad autoinmune que
           afecta las articulaciones provocando hinchazón, dolor y rigidez.
Sin embargo, este diagnóstico no impide que vivas una vida plena.</h3>
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
export default TemplateHome;