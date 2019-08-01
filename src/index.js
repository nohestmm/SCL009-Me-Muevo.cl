import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*Templates && Components*/
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateNews from './views/TemplateNews';
import TemplateRegister from './views/TemplateRegister';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';

const Routes = () => {
    return(
        <div>
               <BrowserRouter>
<Switch>
<Route exact path= '/artritis-reumatoide' component={TemplateInfo} />
<Route exact path= '/ley-ricarte-soto'component={TemplateLaw} />
<Route exact path='/noticias' component={TemplateNews} />
<Route exact path='/registro' component={TemplateRegister} />
<Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
</Switch>
</BrowserRouter>
        </div>
    )
}
export default Routes;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
