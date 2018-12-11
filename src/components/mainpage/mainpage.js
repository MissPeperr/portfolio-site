import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import './mainpage.css';

export default class MainPage extends Component {

    render(){
        return (
            <React.Fragment>
                <div id="header-div">
                    <div id="hello-div">
                        <h2>Madison Peper</h2>
                        <div id="nav-link-div">
                            <NavLink id="about-me-link" href="#about-me">About Me</NavLink>
                            <NavLink id="project-link" href="#project-div">Projects</NavLink>
                            <NavLink id="tech-used-link" href="#tech-used-div">What I've Used</NavLink>
                        </div>
                    </div>
                </div>
                <div id="about-me">
                <br></br>
                    <h2>Who am I?</h2>
                    <div id="about-me-paragraph">
                        <img id="madi-fun-img" src={require('./MadisonPeper_Fun.jpg')} />
                        <p>I'm a problem solving nerd on a mission to learn as much as I can in my lifetime. I've always expressed my creativity through art across various different mediums, and I've found that I can express my creativity through code as well. While working in the customer service industry, I encountered a world of problems that needed solving. Seeing the results of my work in my customer's happy faces and positive feedback, I realized that I not only enjoyed problem solving, but I had a knack for it. That's when I looked to software development.
                        Born and raised from the Sacramento area of California.
                        </p>
                    </div>
                </div>
                <div id="parallax-space"></div>
                <div id="project-div">
                <br></br>
                    <h2>What have I worked on?</h2>
                    <div id="collectable-div">
                        <a href="https://collect-able-app.herokuapp.com" style={{fontSize: "2em", color: "black"}}>CollectAble</a>
                        <br></br>
                        <a href="https://github.com/MissPeperr/CollectAble" style={{color: "darkblue"}}>Github</a>
                        <p>CollectAble is a minimalistic, front-end application used for keeping track of your personal collections. You can create multiple collections, each with their own list of collectables. While creating a collectable, you'll be prompted to add a name, a short description, a photo, and a price. The price isn't necessary, but is included incase you like to trade or sell your collectables! Made with React and a JSON server.</p>
                    </div>
                    <div id="dps-div">
                        <a style={{fontSize: "2em", color: "black"}}>Donation Pick Up Services</a>
                        <br></br>
                        <a style={{color: "darkblue"}}>Github</a>
                        <p>Donation Pick Up Services is an application to schedule  a pick up service for your donations. As a Customer, you can create a donation, view a history of your donations, and check the status of your donation. As an Employee, you can change the status of donations so customers are aware of its progress, and create and manage the types of donations. Coded in C# with .NET Entity Framework.</p>
                    </div>
                </div>
                <div id="parallax-nash"></div>
                <div id="tech-used-div">
                    <h4>What I've worked with</h4>
                    <p>insert a bunch of images of stuff</p>
                </div>
            </React.Fragment>
        )
    }
};