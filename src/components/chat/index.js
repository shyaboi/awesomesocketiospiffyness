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
        //  this.socket = io('http://6056e275.ngrok.io')
        this.socket = io('http://localhost:80')

        this.socket.on('message', (message) => {
            this.setState({
                messages: [
                    message,
                    ...this.state.messages
                ]
            })
        })
    }

    sendMessage(event) {

        const body = event.target.value
        if (event.keyCode === 13 && body) {
            let message = {
                body,
                from: 'Chat-Gang'
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
            <div>
                <input type='text' placeholder='message here'
                    onKeyUp={
                        this.sendMessage
                    }/> {
                this.state.messages.map((message) => {
                    return (
                        <p>{
                            message.body
                        }  -Made By-{
                            message.from
                        }</p>
                    )
                })
            } </div>
        );
    }
}

export default Nard;

/* <input type='text' placeholder='message here' onKeyUp={this.sendMessage}/>

{
    this.state.messages.map((message) => {
        return (
            <p>{message.body}-from-{message.from}</p>
        )
    })
    } */


// const itemsArray = this.state.value.split(',');
// this.setState({toDoList: itemsArray});
// var items = this.state.toDoList.concat(itemsArray);
// this.setState({toDoList: items})
// event.preventDefault();
// this.state.value = ""


// render() {

//     console.log(this.state.toDoList)
//     const items = this.state.toDoList.map((item) => <li id='chats'>
//         {item}</li>);

//     return (
//         <div id='chat'>
//             <div id='grid-container'>
//                 <label>

//                     <form onSubmit={
//                         this.handleSubmit
//                     }>
//                         <input type="text"
//                             value={
//                                 this.state.value
//                             }
//                             onChange={
//                                 this.handleChange
//                             }/>
//                             <button type='submit' id='butt'>chat</button>
//                     </form>
//                     <div></div>

//                 </label>
//               </div>
//             <div id='grid-containe2'>
//                 <ul id='messages'>
//                     {items}</ul>
//             </div>
//         </div>
//     );

// }
