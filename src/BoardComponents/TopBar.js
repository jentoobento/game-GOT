import React from 'react';
import './TopBar.css';
import seasons from '../images/seasons.png';
import  { connect } from "react-redux";

const mapStateToProps = state => {
    return { players: state.players}
}

class ConnectTopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            season: "Summer"
            , player:{}
        }
    }

    componentDidMount(){
        this.setState({
            player: this.props.players
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="row topbar-area">
                    <div className="col-md-4">
                        <img className="playerImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIm0rv6I6q0f6Z5HhzNwgY-WqvqY_iPIOtLqZf13oeusl8uOJuUw" />
                        <h4><b>{this.state.player.name ? this.state.player.name : "placeholder"}</b></h4>
                        <h4><i>House of {this.state.player.house ? this.state.player.house : "placeholder"}</i></h4>
                    </div>
                    <div className="col-md-8">
                        <div className="col-md-4">
                            <h3>gold</h3>
                        </div>
                        <div className="col-md-4">
                            <h3>men</h3>
                        </div>
                        <div className="col-md-4">
                            <h3>reputation</h3>
                        </div>
                        <img src={seasons} alt="" className="seasonsImg" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const TopBar = connect(mapStateToProps)(ConnectTopBar);

export default TopBar;