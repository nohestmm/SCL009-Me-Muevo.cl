import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
/*Templates && Components*/
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateNews from './views/TemplateNews';
import TemplateRegister from './views/TemplateRegister';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';
import TemplateHome from './views/TemplateHome';
import './App.css';
import Navbartemplate from './components/Navbartemplate';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {

    return (
      <>
<<<<<<< HEAD

        <BrowserRouter>
                  <div >
                  <Navbartemplate/>
            {/* <div  >

              <div className="input-search"><input
                type="search"
                className="form-control"
                placeholder="🔎 Buscar" />
              </div>
              <ul className="ĺist-group">
              <li className="list-group-item"><Link to="/">Inicio</Link></li>
                <li className="list-group-item"><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></li>
                <li className="list-group-item"><Link to="/noticias">Noticias</Link></li>
                <li className="list-group-item"><Link to="/registro">Registro de Pacientes</Link></li>
                <li className="list-group-item"><Link to="/quienes-somos">Quiénes Somos</Link></li>
=======
        <BrowserRouter>

          <div className="App row">
            <div className="col-sm-12 col-md-3">
              <nav className="navbar navbar-light bg-light">
                {/* <a className="navbar-brand" href> */}
                  <div className="logo">
                    <Link to="/"><img src="http://www.memuevo.cl/wp-content/themes/newmemuevo/img/logo.png" width="90" height="70" className="d-inline-block align-top" alt="logo de la fundación" /></Link>
                  </div>
                {/* </a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                </nav>

              <div className="pos-f-t">
                <div className="nav-collapse " id="navbarToggleExternalContent">
                  <div className="bg-light">
                    <h2 className="text-dark">Fundación Me Muevo</h2>

                    <Link to="/quienes-somos"><h3 className="list-group-item list-group-item-action">¿Quiénes Somos?</h3></Link>
                    <Link to="/artritis-reumatoide"><h3 className="list-group-item list-group-item-action">Artritis reumatoide</h3></Link>
                    <Link to="/ley-ricarte-soto"><h3 className="list-group-item list-group-item-action">Ley Ricarte Soto</h3></Link>
                    <Link to="/registro"><h3 className="list-group-item list-group-item-action">GES/Auge</h3></Link>
                    <Link to="/registro"><h3 className="list-group-item list-group-item-action">Regístrate como paciente</h3></Link>
                    <Link to="/noticias"><h3 className="list-group-item list-group-item-action">Noticias y Eventos</h3></Link>
>>>>>>> d30db577a05be0ec4da1ae3b07defef7ab63e7a5

                    <div className="rrss">
                      <a href="https://es-la.facebook.com/memuevo.cl/"><img src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_facebook-512.png" className="icon" alt="logo facebook" /></a>
                      <a href="https://twitter.com/memuevocl?lang=es"><img src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_twiter-512.png" className="icon" alt="logo twitter"></img></a>
                      <a href="https://www.youtube.com/channel/UCyl9QdUUFMCDh0HARVzvvwg"><img src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_youtube-512.png" className="icon" alt="logo youtube"></img></a>

<<<<<<< HEAD
              </ul>
            </div> */}
            <div>
=======
                    </div>
                    <div className="rrss">
                      <a className="" href="tel:+56987142470"><h3>Tel: +56 9 87142470</h3></a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="content col-sm-12 col-md-9">
>>>>>>> d30db577a05be0ec4da1ae3b07defef7ab63e7a5
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
