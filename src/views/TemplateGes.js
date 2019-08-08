import React from 'react';
import { Row , Col, Container } from 'react-bootstrap';
import infografiaGes from '../image/infografiaGes.jpg';
import './components.css'


const TemplateGes = () => {

        return (
                
<section>
<Container>
<Row>
<Col>
<h4>GES/Auge</h4>
                    </Col>
<Col xs={12} md={12} >
<img src={infografiaGes} className="d-inline-block align-top" alt="infografia Ges"></img>
        
</Col>
</Row>
       </Container>
</section>
                
        )

}

export default TemplateGes;


        
