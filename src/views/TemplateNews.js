import React, {Component} from 'react';
import data from './data.json'

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
               
                <div className="card col-sm-12 col-md-4 col-lg-2 mt-3">
                  <img src={element.img} className="card-img-top" alt="me muevo"></img>
                  <div className="card-body">
                  <h5 className="card-title"><a className="card-link" href={element.url}>{element.title}</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">{element.date} - {element.type}</h6>
                  <p className="card-text">{element.description}</p>
            </div>
          </div>
              

                 
          
                )
          })
          return (
                  <div className="container">
                          <div className="row">{news}</div>
                          
                  </div>
          )
}
}

// const TemplateNews = () => {
   
//         return (
// <div>
//     <h1>Noticias Recientes</h1>
// </div>
//         )
    
// }

export default TemplateNews;