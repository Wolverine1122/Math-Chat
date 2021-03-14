import React, {Component} from 'react';
import "./body.css";
import Conversations from "./conversations";
import Messenger from "./messenger";

export default class Body extends Component {
    render () {
        return (
            <div className="body">
                <Conversations />
                <Messenger />
            </div>
        )
    }
}
