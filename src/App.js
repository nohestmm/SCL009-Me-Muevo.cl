import React, { Component } from 'react';
import { Row , Col } from 'react-bootstrap';
import { BrowserRouter} from 'react-router-dom';
/*Templates && Components*/
// import TemplateInfo from './views/TemplateInfo';
// import TemplateLaw from './views/TemplateLaw';
// import TemplateNews from './views/TemplateNews';
// import TemplateRegister from './views/TemplateRegister';
// import TemplateWhoWeAre from './views/TemplateWhoWeAre';
// import TemplateHome from './views/TemplateHome';

import './App.css';
import Navbarmobile from './components/Navbarmobile';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {

    return (
    


        <BrowserRouter>
        
                  <div >
                    <Row>
                  <Navbarmobile home ={"/"}  ar ={"/artritis-reumatoide"}/>
                  
              
               
               
          
              <Col xs= {12} md ={9}>
            

       
              {/* <Switch>
                <Route exact path='/' component={TemplateHome} />
                <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
                <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
                <Route exact path='/noticias' component={TemplateNews} />
                <Route exact path='/registro' component={TemplateRegister} />
                <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
              </Switch> */}

          
            </Col> 
            </Row>
           </div>

        
        </BrowserRouter>
      
    );

  }
}


export default App;
