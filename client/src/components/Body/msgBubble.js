import React, {Component} from "react";

export default class msgBubble extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className="msgBubble">
                    <div className="message">{this.props.msg}</div>
                    <div className="timeStamp">
                        <span>Read</span>
                        <span>TimeStamp</span>
                        {/* add timestamp functionality */}
                    </div>
                </div>
        );
    }
}