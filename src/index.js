// Purpose: react app demo
// Author : Simon Li
// Date   : Jan 11, 2020

// $npm install -g create-react-app
// $npx create-react-app myfirstreact

// $npm start

// $npm build
// $npm install -g serve
// $serve -s build
// serve -s build -l 4000


import React from 'react';
import ReactDOM from 'react-dom';
import Car from './car/Car.js';
import MyForm from './form/MyForm.js';
import Football from './football/Football.js';
import MyHeader from './header/MyHeader';

class Main extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
          which: ''
       };
   }
   mySelectHandler = (event) => {
      let value = event.target.value;

      this.setState({which: value});
      this.show(value);
   }

   show = (which) => {
      let objWhich = null;
      switch(which) {
          case 'Car':
               objWhich = <Car />;
               break;
          case 'Football':
               objWhich = <Football />;
               break; 
          case 'Form':
               objWhich = <MyForm />;
               break; 
          case 'Header':
               objWhich = <MyHeader />;
               break; 
          default:
               break;
      } 
      ReactDOM.render(objWhich, document.getElementById('root'));
   }

   render = () => {
       let header = <h3>Please choose one</h3>;  
       return (
         <div>
             {header}
             <select value={this.state.mycar} onChange={this.mySelectHandler}>
              <option value="#">Pick one</option>
              <option value="Car">Car</option>
              <option value="Form">Form</option>
              <option value="Football">Football</option>
              <option value="Header">Header</option>
            </select>
         </div>
       );
   }
}

ReactDOM.render(<Main />, document.getElementById('root'));
