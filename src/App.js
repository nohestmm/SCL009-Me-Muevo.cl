import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
/*Templates && Components*/
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateNews from './views/TemplateNews';
import TemplateRegister from './views/TemplateRegister';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';
import TemplateHome from './views/TemplateHome';
//import Navbar from './components/Navbar'
import './App.css';
import Navbartemplate from './components/Navbartemplate';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <>

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


              </ul>
            </div> */}
            <div>
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
