import React from 'react';
import './style.css';

import io from "socket.io-client";

class Nard extends React.Component {

    constructor() {
        super()

        this.state = {
            messages: []
        }

        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {

        this.socket = io('https://thawing-cliffs-13077.herokuapp.com/')
        this.socket.on('message', (message) => {
            this.setState({messages: [message, ...this.state.messages]})
              })
    }

    sendMessage(event) {

        const body = event.target.value
        if (event.keyCode === 13 && body) {
            let message = {
                body,
                from: 'shyaboi'
            }
            this.setState({
                messages: [
                    message,
                    ...this.state.messages
                ]
            })
            this.socket.emit('message', message)
        }
    }


    render() {
        return (
            <div>shyaboi
                <input type='text' placeholder='message here' onKeyUp={this.sendMessage}/>
                {
                this.state.messages.map((message) => {
                    return (
                        <p>{message.body}-from-{message.from}</p>
                    )
                })
            } </div>
        );
    }
}

export default Nard;
