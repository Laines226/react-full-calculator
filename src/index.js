// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
import Calculator from './components/Calculator';
import BasicNumbers from './components/Numbers';
import BasicOperators from './components/Operators';

require('./favicon.ico'); // Tell webpack to load favicon.ico

function handleInput(input){
    console.log(" first: " + input);
}

function handleInputAfter(input){
    console.log(" second: " + input);
}

render(
    <Calculator numnberBlock={<BasicNumbers numberPressed/>} inputHandler={handleInput} extraInputHandler={[handleInput, handleInputAfter]} />, document.getElementById('app')
);

//  numberBlock={<BasicNumbers />} operatorBlock={<BasicOperators />}
