import React from 'react';
import { Row , Col, Container } from 'react-bootstrap';
import infografiaRicarteSoto from '../image/infografiaRicarteSoto.jpg'

const TemplateLaw = () => {
    
        return (


<section className= "sectionricarteSoto">
       <Container>
<Row>
<Col>
<img className = "ricarteSotoIngfografia" src={infografiaRicarteSoto} alt=""/>

</Col>

</Row>

       </Container>

        
</section>




        )
    
}

export default TemplateLaw;