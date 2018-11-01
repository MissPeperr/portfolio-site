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
                    <p> Attack feet groom forever, stretch tongue and leave it slightly out, blep and cat not kitten around so hide at bottom of staircase to trip human and purr when being pet so sleep on keyboard. Walk on car leaving trail of paw prints on hood and windshield. Kitten is playing with dead mouse sleep on my human's head but if it fits, i sits eat a plant, kill a hand. Purr while eating kitty scratches couch bad kitty, so attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently. Allways wanting food cats making all the muffins. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark. Sun bathe. Purr for no reason. Rub face on owner stare at the wall, play with food and get confused by dust fall asleep upside-down play riveting piece on synthesizer keyboard. Meow in empty rooms hack.</p>
                </div>
                <div id="parallax-space"></div>
                <div id="project-div">
                <br></br>
                    <h2>What have I worked on?</h2>
                    <div id="collectable-div">
                        <h4>CollectAble</h4>
                        <p>DON'T FORGET TO ADD A LINK</p>
                        <p>Attack feet groom forever, stretch tongue and leave it slightly out, blep and cat not kitten around so hide at bottom of staircase to trip human and purr when being pet so sleep on keyboard. Walk on car leaving trail of paw prints on hood and windshield. Kitten is playing with dead mouse sleep on my human's head but if it fits, i sits eat a plant, kill a hand. Purr while eating kitty scratches couch bad kitty, so attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently. Allways wanting food cats making all the muffins. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark. Sun bathe. Purr for no reason. Rub face on owner stare at the wall, play with food and get confused by dust fall asleep upside-down play riveting piece on synthesizer keyboard. Meow in empty rooms hack.</p>
                        <h4>2nd Project Goes Here!</h4>
                        <p>DON'T FORGET TO ADD A LINK</p>
                        <p>Attack feet groom forever, stretch tongue and leave it slightly out, blep and cat not kitten around so hide at bottom of staircase to trip human and purr when being pet so sleep on keyboard. Walk on car leaving trail of paw prints on hood and windshield. Kitten is playing with dead mouse sleep on my human's head but if it fits, i sits eat a plant, kill a hand. Purr while eating kitty scratches couch bad kitty, so attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently. Allways wanting food cats making all the muffins. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark. Sun bathe. Purr for no reason. Rub face on owner stare at the wall, play with food and get confused by dust fall asleep upside-down play riveting piece on synthesizer keyboard. Meow in empty rooms hack.</p>
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