import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10;
var num2 = 3;
var division = num1 / num2
var output = (<div>
        <h1 className='myHeading'>using JSX in react js</h1>
        <hr/>
            <h2>using expression</h2>
            <ul>
                <li className='listItem'>Addition {num1+num2}</li>
                <li className='listItem'>Subtraction {num1 - num2}</li>
                <li className='listItem'>multiplication {num1 * num2}</li>
                <li className='listItem'>Division {division}</li>
                <li className='listItem'>relational expression (num1 above num2) {(num1>num2)?"num1 is bigger":"num1 is smaller"}</li>
            </ul>    
        </div>
        ) 
// jsx 
root.render(output);
