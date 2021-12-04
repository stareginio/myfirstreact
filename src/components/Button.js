import React from 'react';
import '../styles/Button.css';
import Emoji from './Emoji';

// stateful component
class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    addCounter() {
        this.setState({ count: this.state.count + 1 })
    }

    resetCounter() {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div>
                <p>
                    <Emoji symbol="🐌 " />
                    current count = {this.state.count}
                    <Emoji symbol=" 🐌" />
                </p>
                <button
                    id="button"
                    onClick={(e) => this.addCounter(e)}>
                    add me!!
                </button>
                <button
                    id="button"
                    onClick={(e) => this.resetCounter(e)}>
                    reset me!!
                </button>
            </div >
        )
    }
}

export default Button;