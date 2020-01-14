import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>
const myelement = (
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
    <tr>
      <td>John</td>
      <td>Chen</td>
    </tr>
    <tr>
      <td>Elsa</td>
      <td>Wang</td>
    </tr>
  </table>
);

const myelement2 = (
  <ol>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ol>
);

class Car extends React.Component {
  constructor() {
     super();
     this.state = {"color": "grey"};
  }
  render = () => <h2>Hi, I am a {this.state.color} Car!</h2>;
  //render = () => <h2>Hi, I am a {this.props.color} Car!</h2>;
}

function Car2() {
  return <h2>Hi, I am also a Car!</h2>;
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }

//ReactDOM.render(myelement2, document.getElementById('root'));
//ReactDOM.render(<Car />, document.getElementById('root'));
ReactDOM.render(<Car color="red"/>, document.getElementById('root'));
//ReactDOM.render(<Garage />, document.getElementById('root'));

