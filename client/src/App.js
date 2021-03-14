import React from 'react';
import "./App.css"
import Sidebar from './components/Sidebar';
import Body from './components/Body/body.js'


function App(){
    return (
    <div className="App">
        <Sidebar />
        <Body />
    </div>);
}

export default App;