import React from 'react';
import Radium from 'radium';
import './Person.css';
// use ES6 function for creating the function
// Stateless component
const Person = (props)=>{
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };
    return( 
    <div className="person" style={style}>    
    <p onClick={props.click}> Yes i'm {props.name} component an i'm {props.age} year's old</p>
    <p>{props.children }</p>
    <input type="text" onChange={props.changed} value= {props.name}/>
    </div>
    )
}
export default Radium(Person);