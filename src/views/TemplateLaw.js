import React from 'react';
import { Row , Col, Container } from 'react-bootstrap';
import infografiaRicarteSoto from '../image/infografiaRicarteSoto.jpg'
const TemplateLaw = () => {
    
        return (
<section >
       <Container>
<Row>
<Col>
<h4>Ley Ricarte Soto</h4>
                    </Col>
<Col xs = {12} md ={12}>
<div className="sectionricarteSoto"><img className = "ricarteSotoIngfografia" src={infografiaRicarteSoto} alt=""/></div>
</Col>
</Row>
       </Container>
        
</section>
        )
    
}
export default TemplateLaw;