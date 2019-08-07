import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstbanner from '../image/firstbanner.png'
import secondbanner from '../image/secondbanner.png'


const TemplateNews = () => {
    
        return (
               
<>
    <h1>Noticias Recientes</h1>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={firstbanner}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondbanner}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>

        )
    
// }

export default TemplateNews;