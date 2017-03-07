// Set up your application entry point here...
import React from 'react';

class Operators extends React.Component {
    constructor(props) {
        super(props);
        this.clickedAnOperator = this.clickedAnOperator.bind(this);
    }
    clickedAnOperator(event){
        this.props.operatorPressed(event.target.value);
    }
    render() {
        let renderResult = [];
        return (
            <div>
                <button value="+" onClick={this.clickedAnOperator}>+</button>
                <button value="-" onClick={this.clickedAnOperator}>-</button>
                <button value="*" onClick={this.clickedAnOperator}>*</button>
                <button value="/" onClick={this.clickedAnOperator}>/</button>
                <br />
            </div>
        );
    }
}

Operators.propTypes = {
    operatorPressed: React.PropTypes.func.isRequired
}

export default Operators;