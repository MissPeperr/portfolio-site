import React, { Component } from 'react';
import './mainpage.css';

export default class MainPage extends Component {

    render(){
        return (
            <React.Fragment>
                <div id="header-div">
                    <div>
                        <img id="space-pic" src={require('./blue-orange-space.jpg')} alt="Space"/>
                    </div>
                    <div id="hello-div">
                        <h2>Hello I'm Madi</h2>
                    </div>
                </div>
                <div id="about-me"></div>
                <div></div>
            </React.Fragment>
        )
    }
};