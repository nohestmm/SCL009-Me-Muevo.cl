import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import data from './data.json';
import './components.css'

class TemplateNews extends Component{
constructor(){
super();
this.state ={
        dataNews : data.Noticias
}
}

render(){
        const news = this.state.dataNews.map((element, index)=>{
      
                return (  
                  <Card className="my-cards" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={element.img} />
                  <Card.Body>
                    <Card.Title><a className="card-link" href={element.url}>{element.title}</a></Card.Title>
                    <Card.Text>
                      {element.description}
                    </Card.Text>
             
                  </Card.Body>
                </Card>
  
          
                )
          })
          return (
                  <div className="container">
                          <div className="cards-news row">
                            {news}
                            {/* <div className="col-12">{news}</div> */}
                          
                          </div>
                          
                </div>
          )
}
}
export default TemplateNews;