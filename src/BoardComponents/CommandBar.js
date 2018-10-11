import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CommandBar.css';


// DEFAULT VALUES (change as needed!)

const DEFAULT_GOLD = 500;
const DEFAULT_MEN = 50;
const DEFAULT_REP = 0;

// COMMAND VARIABLES (change as needed)

const GOLD_NEEDED_TO_HIRE_MEN = 200;
const GOLD_GAINED_FROM_BTN_CLICK = 50;
const GOLD_GAINED_EACH_TURN = 25;
const MEN_GAINED_FROM_BTN_CLICK = 10;
const MEN_DIED_FROM_WINTER = 3;
const REP_GAINED_FROM_BTN_CLICK = 5;


class CommandBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gold: DEFAULT_GOLD,
            men: DEFAULT_MEN,
            rep: DEFAULT_REP,
            turn: 1, // each turn is 1 month
            season: 'Summer'
        }
    }

    /**
    * Reputation slightly affects every command.
    */

    gainRepBtn = () => {
        this.setState({
            rep: this.state.rep + REP_GAINED_FROM_BTN_CLICK
        })
        this.endTurn();
    }


    /**
     * Gold increases every turn/month even if you do nothing. But using the 'Aquire Gold' command gives you
     * more gold than just waiting for it at the end of your turn/month.
     * Also if you have more reputation, the more gold you get increases.
     */

    aquireGoldBtn = () => {
        this.setState({
            gold: Math.ceil(this.state.gold + (this.state.rep * .5) + GOLD_GAINED_FROM_BTN_CLICK)
        })
        this.endTurn();
    }


    /**
     * Hiring men requires gold. If you have no gold, you cannot hire men. Men will decrease when invading, 
     * if someone invades you and decrease slowly during the month of winter.
     * Also if you have more reputation, you will be able to hire more men.
     */

    hireMenBtn = () => {
        if (this.state.gold >= GOLD_NEEDED_TO_HIRE_MEN) {
            this.setState({
                gold: this.state.gold - GOLD_NEEDED_TO_HIRE_MEN,
                men: this.state.men + (this.state.rep / 5) + MEN_GAINED_FROM_BTN_CLICK
            });
            this.endTurn();
        } else {
            console.log('not enough gold to hire men')
        }
    }

    invadeBtn = () => {
        console.log('fight!!!!!!')
    }

    /**
     * Each turn = 1 month. Every 3rd month the season will change. You get gold at the end of each turn/month
     * even if you do nothing. The amount of gold you get at the end of each turn/month increases slower 
     * during winter and faster during spring. Men also die slowly during winter even if you do nothing.
     */

    endTurn(gold = GOLD_GAINED_EACH_TURN) {
        this.setState(prevState => {
            if (prevState.season === 'Winter') {
                gold = GOLD_GAINED_EACH_TURN / 2;
            } else if (prevState.season === 'Spring') {
                gold = GOLD_GAINED_EACH_TURN * 1.25;
            }
            return {
                gold: prevState.gold + Math.ceil(gold),
                men: prevState.season === 'Winter' ? prevState.men - MEN_DIED_FROM_WINTER : prevState.men,
                turn: this.state.turn + 1,
                season: prevState.turn % 3 === 0 ? this.determineSeason(this.state.season) : this.state.season
            }
        })
    }

    determineSeason(season) {
        if (season === 'Spring') {
            return 'Summer';
        }
        if (season === 'Summer') {
            return 'Fall';
        }
        if (season === 'Fall') {
            return 'Winter';
        }
        if (season === 'Winter') {
            return 'Spring';
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="container col-md-3 command-area">
                    <h2>Commands</h2>
                    <button onClick={this.gainRepBtn} className="btn btn"><FontAwesomeIcon icon="star" />Gain Reputation</button>
                    <button onClick={this.aquireGoldBtn} className="btn btn"><FontAwesomeIcon icon="coins" />Aquire Gold</button>
                    <button onClick={this.hireMenBtn} className="btn btn" disabled={this.state.gold < GOLD_NEEDED_TO_HIRE_MEN ? true : false}><FontAwesomeIcon icon="user-plus" />Hire Men</button>
                    <button onClick={this.invadeBtn} className="btn btn"><FontAwesomeIcon icon="bookmark" />Attempt to Invade</button>
                </div>
            </React.Fragment>
        )
    }
}

export default CommandBar;