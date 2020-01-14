import React from 'react'; 

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      age: null,
      mycar: 'Volvo',
      description: '',
      errormessage: '' 
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submiting " + this.state.username + ", age: " + this.state.age);
  }
  mySelectHandler = (event) => {
    let name = 'mycar';
    let value = event.target.value;
    alert(name + ":" + value);

    this.setState({[name]: value});
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let err = '';

    if (name === "age") {
      if (!Number(value)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({[name]: value});
    this.setState({errormessage: err});
  }
  render = () => {
    let header = '';
    if (this.state.username) 
	header = <h1>Hello {this.state.username} {this.state.age}</h1>;
    return (
      <form onSubmit={this.mySubmitHandler}>
        {header}
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        /> 
        <input type='submit'
        />
        <p> Enter your age:</p>
        <input 
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        <br/> 
        {this.state.errormessage}
        <br/>
        <textarea value={this.state.description} />
        <br/>
        <select value={this.state.mycar} onChange={this.mySelectHandler}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      </form>
    );
  }
}

export default MyForm;
