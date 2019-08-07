import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/*Templates && Components*/
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateNews from './views/TemplateNews';
import TemplateRegister from './views/TemplateRegister';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';
import TemplateHome from './views/TemplateHome';

import './App.css';
import Navbarmobile from './components/Navbarmobile';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <>

        <BrowserRouter>

         
            <header><Navbarmobile /></header>
            <Switch>
              <Route exact path='/' component={TemplateHome} />
              <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
              <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
              <Route exact path='/noticias' component={TemplateNews} />
              <Route exact path='/registro' component={TemplateRegister} />
              <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
            </Switch>




       


        </BrowserRouter>
      </>
    );

  }
}


export default App;
