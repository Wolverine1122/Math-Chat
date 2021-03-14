import React, {Component} from 'react';
import "./Sidebar.css"


export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-item">MCLogo</div> {/* logo here instead of mathchat*/}
                <div className="sidebar-item">Setttings</div>
            </div>
        );
    }
}
