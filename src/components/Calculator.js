// Set up your application entry point here...
import React from 'react';
import Numbers from './Numbers';
import Operators from './Operators';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            operator: " ",

            // unwanted
            display: '0',
            displayPrev: '',
            afterEquals: false
        }
        this.handleInput = this.props.inputHandler || this.defaultHandleInput.bind(this);
        this.numberClicked = this.numberClicked.bind(this);
        this.operatorClicked = this.operatorClicked.bind(this);
        this.calculate = this.calculate.bind(this);

        this.operatorFunctions = {
            '+': (a, b) => { return Number.parseInt(a) + Number.parseInt(b) },
            '-': (a, b) => { return Number.parseInt(a) - Number.parseInt(b) },
            '*': (a, b) => { return Number.parseInt(a) * Number.parseInt(b) },
            '/': (a, b) => { return Number.parseInt(a) / Number.parseInt(b) },
        }

        console.log("Calculator [object]", this);
    }

    defaultHandleInput(input) {
        console.log("handleInput [input] ", input);
        if (typeof (input) == "number") {
            this.numberClicked(input);
        }
        else if (typeof (input) == "string") {
            this.operatorClicked(input);
        }
        else {
            alert("handleInput needs a string or a number as an input");
        }
    }

    numberClicked(number) {
        console.log("numberClicked [number] ", number);
        if (this.state.afterEquals) {
            this.setState(prevState => ({
                number1: number,
                number2: 0,
                display: number.toString(),
                afterEquals: false,
            }));
        }
        else if (this.state.operator === " ") {
            this.setState(prevState => ({
                number1: (prevState.number1 * 10) + number,
                display: ((prevState.number1 * 10) + number).toString()
            }));
        }
        else {
            this.setState(prevState => ({
                number2: (prevState.number2 * 10) + number,
                display: ((prevState.number2 * 10) + number).toString()
            }));
        }
    }

    operatorClicked(operator) {
        if (this.operatorFunctions.hasOwnProperty(operator)) {
            if (this.state.operator === " ") {
                this.setState(prevState => ({
                    afterEquals: false,
                    display: prevState.number1,
                    displayPrev: prevState.display + " " + operator,
                    operator: operator
                }));
            }
            else {
                this.setState(prevState => {
                    let calculatedNumber = this.operatorFunctions[prevState.operator](this.state.number1, this.state.number2);
                    return ({
                        afterEquals: false,
                        number1: calculatedNumber,
                        number2: 0,
                        operator: operator,
                        displayPrev: (calculatedNumber) + " " + operator,
                        display: calculatedNumber
                    });
                });
            }
        }
        else {
            alert("No such operator available");
        }
    }

    calculate() {
        let calculatedNumber = this.operatorFunctions[prevState.operator](this.state.number1, this.state.number2);
        this.setState(prevState => ({
            afterEquals: true,
            number1: calculatedNumber,
            number2: 0,
            operator: " ",
            displayPrev: ' ',
            display: calculatedNumber
        }));
    }

    render() {
        return (
            <div>
                <p>{this.state.displayPrev}</p>
                <span><input type="number" value={this.state.display} readOnly /></span><br />
                <Numbers numberPressed={this.handleInput} />
                <Operators operatorPressed={this.handleInput} />
            </div>
        );
    }
}
/**
Calculator.defaultProps = {
    numberBlock: <Numbers handleInput={Calculator.prototype.handleInput} />,
    operatorBlock: <Operators handleInput={Calculator.prototype.handleInput} />,
    startValue: 0
}
 */
Calculator.propTypes = {
    inputHandler: React.PropTypes.func,
    extraInputHandler: React.PropTypes.arrayOf(React.PropTypes.func)
}
/**
 * <span>
                    <input type="number" value={this.state.number1} readOnly />
                    {this.state.operator}
                    <input type="number" value={this.state.number2} readOnly />
                </span>
                <Numbers handleInput={this.numberClicked} />
                <Operators handleInput={this.operatorClicked} />
                <button onClick={this.calculate} >=</button>
 */
export default Calculator;
