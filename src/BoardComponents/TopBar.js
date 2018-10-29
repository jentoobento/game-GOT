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
            turn: this.props.turn, // each turn = 1 month & 30 deg turning of season
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

    textStyle = () =>{
        return this.state.season === "Winter" ? {"color": "#2c79bf"} : {"color":"#656060"};
    }

    render() {
        return (
            <React.Fragment>
                <div className="topbar-area container">
                    <div className="playerInfo">
                        <img className="playerImg" alt="" src={this.state.player.imageLink} />
                        <img src={seasons} alt="" className="seasonsImg" style={{ 'transform': 'rotate(' + (this.state.turn * 30 + 20) + 'deg)' }} />&larr; Current Season
                        <br />
                        <h4><b>{this.state.player.name ? this.state.player.name : "Unknown"}</b></h4>
                        <h4><i> House {this.state.player.house ? this.state.player.house : "Unknown"}</i></h4>
                    </div>
                    <div className="flex-container" style={this.textStyle()}>
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
                        <div className="row">
                            <span className="flex-item">
                                <h3>Year {Math.floor(this.state.turn / 12)}</h3>
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