import React, { Component } from "react";
import "./conversations.css";

export default class Conversations extends Component {
    render() {
        return (
            <div className="conversations">
                <button className="button">
                    <span>New Message</span>
                </button>
                <div className="conversation-heading">
                    <h2>Messages</h2>
                </div>
                <div className="conversation-search">
                    <div className="search-container">
                        <input type="text" placeholder="Search" required/>
                        <button className="search-btn"> <i className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
            // display messages here
        );
    }
}