import React from "react";

// stateful component
class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    addCounter() {
        this.setState({count: this.state.count + 1})
    }

    resetCounter() {
        this.setState({count: 0})
    }

    render() {
        return (
            <div>
                <p>current count = {this.state.count}</p>
                <button onClick = {(e) => this.addCounter(e)}> add me!! </button>
                <button onClick={(e) => this.resetCounter(e)}> reset me!! </button> 
            </div >
        )
    }
}

export default Button;