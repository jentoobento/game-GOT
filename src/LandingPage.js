import React, { Component } from 'react';

import "./LandingPage.css"

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    nextBtn = () => {
        this.props.history.push('/create-character');
    }

    render() {
        return (
            <div className="container landing-page">
                <h1>Welcome to the Game of Thrones!</h1>
                {/* Story and rules */}
                <p>
                    Your story will take place in this world over the course of months. You are a member of
                    a Great House and your goal is to survive the threat of winter. You are given gold and men
                    for your army. At the end of every month you must make a decision on what you plan to do
                    for the next month. You can invest for more gold, hire more men for your army, or attempt to
                    conquer an enemy's castle. Over time you may have access to more commands. Each month your
                    enemies will also take action so keep that in mind.
                </p>
                <button id="landing-page-btn" onClick={this.nextBtn}>Next</button>
            </div>
        )
    }
}

export default LandingPage;