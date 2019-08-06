import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
/*Templates && Components*/
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateNews from './views/TemplateNews';
import TemplateRegister from './views/TemplateRegister';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';
import TemplateHome from './views/TemplateHome';
//import Navbar from './components/Navbar'
import './App.css';


class App extends Component {
  render() {

    return (
      <>
        <BrowserRouter>

          <header>


          </header>
          <div className="App row">
            <div className="col-sm-12 col-md-3">
              <nav class="navbar navbar-light bg-light">
                <a className="navbar-brand" href>
                  <div className="logo">
                    <Link to="/"><img src="http://www.memuevo.cl/wp-content/themes/newmemuevo/img/logo.png" width="90" height="70" className="d-inline-block align-top" alt="logo de la fundación" /></Link>
                  </div>
                </a>
                <button class="navbar-toggler rotate" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>

              <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                  <div class="bg-light">
                    <h2 class="text-dark">Fundación Me Muevo</h2>

                    <Link to="/quienes-somos"><h3 className="list-group-item list-group-item-action">¿Quiénes Somos?</h3></Link>
                    <Link to="/artritis-reumatoide"><h3 className="list-group-item list-group-item-action">Artritis reumatoide</h3></Link>
                    <Link to="/ley-ricarte-soto"><h3 className="list-group-item list-group-item-action">Ley Ricarte Soto</h3></Link>
                    <Link to="/registro"><h3 className="list-group-item list-group-item-action">GES/Auge</h3></Link>
                    <Link to="/registro"><h3 className="list-group-item list-group-item-action">Regístrate como paciente</h3></Link>
                    <Link to="/noticias"><h3 className="list-group-item list-group-item-action">Noticias y Eventos</h3></Link>

                    <div className="rrss">
                      <a href="https://es-la.facebook.com/memuevo.cl/"><img src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_facebook-512.png" className="icon" alt="logo facebook" /></a>
                      <a href="https://twitter.com/memuevocl?lang=es"><img src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_twiter-512.png" className="icon" alt="logo twitter"></img></a>
                      <a href="https://www.youtube.com/channel/UCyl9QdUUFMCDh0HARVzvvwg"><img src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_youtube-512.png" className="icon" alt="logo youtube"></img></a>

                    </div>
                    <div className="rrss">
                      <a className="" href="tel:+56987142470"><h3>Tel: +56 9 87142470</h3></a>
                    </div>
                  </div>
                </div>
              </div>





            </div>
            <div className="content col-sm-12 col-md-9">
              <Switch>
                <Route exact path='/' component={TemplateHome} />
                <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
                <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
                <Route exact path='/noticias' component={TemplateNews} />
                <Route exact path='/registro' component={TemplateRegister} />
                <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
              </Switch>

            </div>

          </div>

        </BrowserRouter>
      </>
    );

  }
}


export default App;
