// Set up your application entry point here...
import React from 'react';

class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.clickedAnNumber = this.clickedAnNumber.bind(this);
    }
    clickedAnNumber(event){
        this.props.numberPressed(Number.parseInt(event.target.value));
    }
    render() {
        let renderResult = [];
        return (
            <div>
                <button value="1" onClick={this.clickedAnNumber}>1</button>
                <button value="2" onClick={this.clickedAnNumber}>2</button>
                <button value="3" onClick={this.clickedAnNumber}>3</button>
                <br />
                <button value="4" onClick={this.clickedAnNumber}>4</button>
                <button value="5" onClick={this.clickedAnNumber}>5</button>
                <button value="6" onClick={this.clickedAnNumber}>6</button>
                <br />
                <button value="7" onClick={this.clickedAnNumber}>7</button>
                <button value="8" onClick={this.clickedAnNumber}>8</button>
                <button value="9" onClick={this.clickedAnNumber}>9</button>
                <br />
                <button value="0" onClick={this.clickedAnNumber}>0</button>
                <br />
            </div>
        );
    }
}

Numbers.propTypes = {
    numberPressed: React.PropTypes.func.isRequired
}

export default Numbers;