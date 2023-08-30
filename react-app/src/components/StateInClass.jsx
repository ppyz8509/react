import React, { Component } from "react";

export default class StateInClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "1",
            name: "Naphat",
            counter: 0
        };
    }

    clickPlus = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    clickMinus = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>State in Class Component</h2>
                <h3>Name</h3>
                {this.state.name}
                <h3>Counter</h3>
                {this.state.counter}
                <br />
                <button onClick={this.clickPlus}>+</button>
                <button onClick={this.clickMinus}>-</button>
            </div>
        );
    }
}
