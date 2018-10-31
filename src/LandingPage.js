import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "./LandingPage.css"

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableOfContent: ["general", "characters", "commands"]
        }
    }

    nextBtn = () => {
        this.props.history.push('/create-character');
    }

    render() {

        const tbc = this.state.tableOfContent.map(item => {
            return (
                <li key={item} data-listid={item} onClick={()=> {scroller.scrollTo(item, {duration:1000, delay:100, smooth: true})}}><a>{item}</a></li>
            )
        })

        return (
            <React.Fragment>
                <img width="100%" height="700px" style={{"opacity":"0.3", "position":"fixed"}} src="http://images6.fanpop.com/image/photos/39000000/The-Seven-Kingdoms-game-of-thrones-39088621-2048-1146.jpg"/>
                <div className="container landing-page">
                    <h1>Welcome to the Game of Thrones!</h1>
                    {/* Story and rules */}
                    <div id="welcome-message">
                        <i>
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                    </div>
                    <hr />
                    <div>
                        <h1>How to Play</h1>
                        <div id="table-of-content">
                            <ul>
                                {tbc}
                            </ul>
                        </div>
                        <hr />
                        <h3 name="general">General</h3>
                        <hr />
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                        <hr />
                        <h3 name="characters">Characters</h3>
                        <hr />
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                        <hr />
                        <h3 name="commands">Commands</h3>
                        <hr />
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                        <i className="how-to-play-contnet">
                            Your story will take place in this world over the course of months. You are a member of
                            a Great House and your goal is to survive the threat of winter. You are given gold and men
                            for your army. At the end of every month you must make a decision on what you plan to do
                            for the next month. You can invest for more gold, hire more men for your army, or attempt to
                            conquer an enemy's castle. Over time you may have access to more commands. Each month your
                            enemies will also take action so keep that in mind.
                        </i>
                    </div>

                    {/* <button id="landing-page-btn" onClick={this.nextBtn}>Next</button> */}
                </div>
                <footer id="landing-footer" onClick={this.nextBtn}>
                    <b>I'm ready for battle!</b>
                </footer>
            </React.Fragment>

        )
    }
}

export default LandingPage;