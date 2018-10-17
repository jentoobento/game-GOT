import React from 'react';
import seasons from '../images/seasons-arrows.png';
import { connect } from "react-redux";

import './TopBar.css';

const mapStateToProps = state => {
    return { players: state.players, resources: state.resources, turn: state.turn, season: state.season }
}

class ConnectTopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: {
                gold: this.props.resources.gold
                , men: this.props.resources.men
                , reputation: this.props.resources.reputation
            },
            player: this.props.players,
            turn: this.props.turn,
            season: this.props.season
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.resources !== this.props.resources) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    resources: {
                        ...prevState.resources,
                        gold: nextProps.resources.gold
                        , men: nextProps.resources.men
                        , reputation: nextProps.resources.reputation
                    },
                    turn: nextProps.turn,
                    season: nextProps.season
                }
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="topbar-area container">
                    <div className="playerInfo">
                        <img className="playerImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIm0rv6I6q0f6Z5HhzNwgY-WqvqY_iPIOtLqZf13oeusl8uOJuUw" />
                        <img src={seasons} alt="" className="seasonsImg" />
                        <h4><b>{this.state.player.name ? this.state.player.name : "Unknown"}</b></h4>
                        <h4><i>House of {this.state.player.house ? this.state.player.house : "Unknown"}</i></h4>
                    </div>
                    <div className="flex-container">
                        <div className="row">
                            <span className="flex-item">
                                <h3>{this.state.resources.gold} gold</h3>
                            </span>
                        </div>
                        <div className="row">
                            <span className="flex-item">
                                <h3>{this.state.resources.men} men</h3>
                            </span>
                        </div>
                        <div className="row">
                            <span className="flex-item">
                                <h3>{this.state.resources.reputation} reputation</h3>
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const TopBar = connect(mapStateToProps)(ConnectTopBar);

export default TopBar;