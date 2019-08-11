import React from "react";
import { Row, Col, Container} from 'react-bootstrap';

const Footermain= () => {
 return (
   <footer className="footermain">
   <Container>
     <Row>
        
           <Col xs ={12} md={6}>
            
               <h2>
                 <a href="https://www.memuevo.cl" alt="Fundación Me Muevo"></a>
               </h2>
         
                 <p className="rrss">
                   RUT: 65.088.095-1
                 </p>
               
                 <p className="rrss">
                   Contactanos: <a href="tel: +56987433259" title="Teléfono">+56987433259</a>
                 </p>
                 <p className="rrss">
                   Providencia, Santiago de Chile
                 </p>
  </Col>
                 <Col xs ={12} md={6}>
                 <a className="rrss" href="mailto:comunicaciones@memuevo.cl" title="Enviar correo">comunicaciones@memuevo.cl</a>
           
               <p className="rrss">
                   <strong>© Fundación Me Muevo 2014 </strong>
               </p>
               
                   <a href="https://www.facebook.com/memuevo.cl" title="Facebook" className="fb" id="fb"
                     target="black"></a>
                   <a href="https://www.twitter.com/memuevoCl" title="Twitter" className="tw" id="tw"
                     target="black"></a>
                   <a href="https://www.youtube.com/channel/UCy19QdUUFMCDh0HARVzvvwg" title="Youtube" className="yt" id="yt"
                     target="black"></a>
              
        </Col>
         </Row>
       </Container>
       </footer>

);
}
export default Footermain;