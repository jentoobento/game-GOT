import React from 'react';
import './TopBar.css';
import seasons from '../images/seasons-80x80.png';
import  { connect } from "react-redux";

const mapStateToProps = state => {
    return { players: state.players }
}

class ConnectTopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gold: 0,
            men: 0,
            rep: 0,
            season: "Summer"
            , player: {}
        }
    }

    componentDidMount() {
        this.setState({
            player: this.props.players
        })
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
                                <h3>{this.state.gold} gold</h3>
                            </span>
                        </div>
                        <div className="row">
                            <span className="flex-item">
                                <h3>{this.state.men} men</h3>
                            </span>
                        </div>
                        <div className="row">
                            <span className="flex-item">
                                <h3>{this.state.rep} reputation</h3>
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