import React, { Component } from 'react';
import './App.css';
import Persons from './Components/Persons/Persons';
import Radium, {StyleRoot} from "radium";

class App extends Component{
  //using the state property
  // State can be change but it will lead to re render the application 
state = {
  persons : [
    { id: 1,name:'max', age:20},
    { id: 2,name:'Shubham', age:21},
    { id :3,name:'Martin', age:20}
  ],
  showPersons:false,
  otherState:"Some other value"
}
  deletePersonHandler = (personIndex)=>{
      // const persons =  this.state.persons.slice();
      const persons =  [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  } 
  nameChangeHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]}
    person.name= event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  }
  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState(({showPersons : !doesShow}))
  }
  render(){
    // Inline styling in React using javascript syntax
    const style = {
      color:"white",
      backgroundColor : "green",
      font:'inherit',
      border : '1px solid blue',
      padding : "8px",
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
         <div>
           <Persons 
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangeHandler}/>
    </div> 
      );
      // change the color of the button dynamically
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    }
    const classes = [];
    if(this.state.persons.length >=3){
      classes.push('none');
    }
    if(this.state.persons.length <=2){
      classes.push('red'); // classes = [red];
    }
    if(this.state.persons.length <=1 ){
      classes.push('bold'); // classes =[red, bold];
    }
  return (
    <StyleRoot>
    <div className="App">
     <h1>Hello There!!</h1>
     <p className={classes.join(' ')}>Your list has less number of elements !!</p>
     <button  style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
     {persons}    
    </div>
    </StyleRoot>
  );
  }
}

export default Radium(App);
