import React, {Component} from 'react';
import './messenger.css';
import MsgBubble from "./msgBubble";


// Need to make it so it scrolls as new messages come in

export default class messenger extends Component {
    // add messages to the array for it to display
    msgArray = [];
    constructor(props){
        super(props);
        // add variable for messages
        this.state = {
            chat: this.msgArray,
            msg: ""
        };
    }

    componentDidMount() {
        window.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            if (this.state.msg !== "") {
              this.msgArray.push({
                msg: this.state.msg,
              });
              this.setState({ chat: [...this.msgArray] });
              this.setState({ msg: "" });
            }
          }

      });
    }
    onStateChange = (e) => {
        this.setState({msg: e.target.value});
    }
    render() {
        return (
            <div className="messenger">
                {/* Displays the Name of user you are messaging */}
                <div className="msg-header">   
                    <div className="recipient">
                        <p>John Doe</p>
                    </div>
                </div>
                {/* Display the messages in conversation */}
                <div className="msg-content">
                    <div className="messages">
                        <div className="bubbles">
                        {this.state.chat.map((chat) => {
                            return (
                                <MsgBubble msg={chat.msg}/>
                            );
                        })}
                        </div>
                    </div>
                </div>
                {/* Input for typing messages */}
                <div className="msg-input">
                    <div className="send-msg">
                        <input type="text" placeholder='Message' value={this.state.msg} onChange={this.onStateChange}/>
                    </div>
                </div>
            </div>
        );
    }
}