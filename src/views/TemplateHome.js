import React from 'react'
import '../views/components.css';
import { Row , Col, Container } from 'react-bootstrap';
import CarouselHome from '../components/CarouselHome';


const TemplateHome = () => {
    return (
            <section>
            <Container>
            <Row> 
                <Col>
            <h1>Bienvenido a Me muevo</h1>
                </Col>
                
            </Row>
            <Row> 
                <Col xs = {12} md ={12}>  
                {/* <iframe className="iframe-video"
                    src="https://www.youtube.com/embed/t485RIj4-og" 
                    frameBorder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                    allowFullScreen title="video"/> */}

                    <CarouselHome/>
            </Col>
            <Col  xs = {12} md ={6}>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Magnam laboriosam minus architecto nulla id consequatur eos 
                        porro culpa odio possimus? Iusto doloremque doloribus hic 
                        accusamus cumque libero repellat sit maiores? Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Ullam et atque adipisci, 
                        aliquid molestias ipsum libero debitis quos harum alias dolorum culpa
                         optio consequatur veniam commodi vero? Odio, fugiat deleniti!
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eum explicabo, 
                         omnis dolorum laboriosam ad assumenda consequuntur. Sunt aut cumque ducimus labore, 
                         dolor magnam in assumenda tempora dolorum magni eaque?
                        </p>
                </div>
                </Col>
               </Row>
               </Container>
               </section>       
 )
}
export default TemplateHome;