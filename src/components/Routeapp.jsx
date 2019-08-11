import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
/*Templates && Components*/
import TemplateInfo from '../views/TemplateInfo';
// import TemplateLaw from '../views/TemplateLaw';
// import TemplateNews from '../views/TemplateNews';
// import TemplateRegister from '../views/TemplateRegister';
// import TemplateWhoWeAre from '../views/TemplateWhoWeAre';
import TemplateHome from '../views/TemplateHome';


import 'bootstrap/dist/css/bootstrap.min.css';



class Routeapp extends Component {
  constructor(props){
  super(props)
this.state ={

}


  }
  render() {
// let optionone, optiontwo;
// if(this.props.clickone !==""){
//   optionone = this.props.clickone;
 
// }
// if(this.props.clicktwo !==""){
//   optiontwo = this.props.clicktwo;
 
// }

// if(this.props.hoverone !==""){
//   optionone = this.props.clickone;
 
// }
// if(this.props.hovertwo !==""){
//   optiontwo = this.props.clicktwo;
 
// }



    return (
      
        <Switch>
          
            
          <Route exact path={this.props.clickone} component={TemplateHome} />
          <Route exact path={this.props.clicktwo} component={TemplateInfo} /> 
            
          
          
        </Switch>
   
    )
  }
}


export default Routeapp;