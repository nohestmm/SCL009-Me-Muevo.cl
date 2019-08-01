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

            <nav className="navbar navbar-light bg-light navbar-expand-lg ">
              <a className="navbar-brand" href>
                <div className="logo">
                  <Link to="/"><img src="http://www.memuevo.cl/wp-content/themes/newmemuevo/img/logo.png" width="90" height="70" className="d-inline-block align-top" alt="" /></Link></div>

              </a>
            </nav>
          </header>
          <div className="App row">
            <div className="sidebar col-3 p-2px" >

              <div className="input-search"><input
                type="search"
                className="form-control"
                placeholder="🔎 Buscar" />
              </div>
              <ul className="ĺist-group">
                <li className="list-group-item"><Link to="/artritis-reumatoide">Artritis reumatoide</Link></li>
                <li className="list-group-item"><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></li>
                <li className="list-group-item"><Link to="/noticias">Noticias</Link></li>
                <li className="list-group-item"><Link to="/registro">Registro de Pacientes</Link></li>
                <li className="list-group-item"><Link to="/quienes-somos">Quienes Somos</Link></li>


              </ul>
            </div>
            <div className="content col-9">
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
