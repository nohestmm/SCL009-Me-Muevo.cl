import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
// /*Templates && Components*/
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
<<<<<<< HEAD
      <BrowserRouter>
       
          <Navbarmobile home ={"/"}  ar ={"/artritis-reumatoide"}/>
      
       
        {/* <Switch>
          <Route exact path='/' component={TemplateHome} />
          <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
          <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
          <Route exact path='/noticias' component={TemplateNews} />
          <Route exact path='/registro' component={TemplateRegister} />
          <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
        </Switch> */}
      </BrowserRouter>
    )
=======
      <>


        <BrowserRouter>
        
                  <div >
                    <Row>
                  <Navbarmobile/>
                <Menudesktop/>
               
               
          
              <Col xs= {12} md ={9}>
            

       
              <Switch>
                <Route exact path='/' component={TemplateHome} />
                <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
                <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
                <Route exact path='/noticias' component={TemplateNews} />
                <Route exact path='/registro' component={TemplateRegister} />
                <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
              </Switch>

          
            </Col> 
            </Row>
           </div>

        
        </BrowserRouter>
      </>
    );

>>>>>>> 0846eeff6f1a6ba06f61b479a7e5f5f3a492e52a
  }
}


export default App;
