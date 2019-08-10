import React from "react";
import { Row, Col} from 'react-bootstrap';

const Footermain= () => {
 return (
   <Row>
         <Col xs={12} md={12}>
           <footer className="bgNav">
             <div class="bgNav navbar-nav">
               <h2>
                 <a href="http://www.memuevo.cl" title="Fundación Me Muevo"></a>
               </h2>
               <div class="rrss">
                 <p class="rrss">
                   RUT: 65.088.095-1
                 </p>
                 <p class="rrss">
                   Contactanos: <a href="tel: +56987433259" title="Teléfono">+56987433259</a>
                 </p>
                 <p class="rrss">
                   Providencia, Santiago de Chile
                 </p>
                 <a class="rrss" href="mailto:comunicaciones@memuevo.cl" title="Enviar correo">comunicaciones@memuevo.cl</a>
               </div>
               <p class="rrss">
                   <strong>© Fundación Me Muevo 2014 </strong>
               </p>
               <div className="rrss">
                   <a href="http://www.facebook.com/memuevo.cl" title="Facebook" class="fb" id="fb"
                     target="black"></a>
                   <a href="http://www.twitter.com/memuevoCl" title="Twitter" class="tw" id="tw"
                     target="black"></a>
                   <a href="http://www.youtube.com/channel/UCy19QdUUFMCDh0HARVzvvwg" title="Youtube" class="yt" id="yt"
                     target="black"></a>
               </div>
             </div>
           </footer>
         </Col>
       </Row>
);
}
export default Footermain;