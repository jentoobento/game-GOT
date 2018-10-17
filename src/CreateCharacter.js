import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from "react-redux";
import { addPlayer } from "./redux/actions/index";

import './CreateCharacter.css'

window.addPlayer = addPlayer;

const mapStateToProps = state => {
    return { players: state.players }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: player => dispatch(addPlayer(player))
    }
}
class ConnectCreateCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            house: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    nextBtn = () => {
        const data = this.state;
        this.props.addPlayer(data);
        this.props.history.push('/board');
    }

    render() {
        return (
            <React.Fragment>
                <form className="container create-character">
                    <FormGroup controlId="formBasicText">
                        <h1>Who are you?</h1>
                        <ControlLabel>Your Name</ControlLabel>
                        <FormControl
                            className="text-box"
                            type="text"
                            value={this.state.name}
                            placeholder="What do you wish to be called?"
                            name="name"
                            onChange={this.onChange} />
                        <ControlLabel>House Name</ControlLabel>
                        <FormControl
                            className="text-box"
                            type="text"
                            value={this.state.house}
                            placeholder="What is the name of your house?"
                            name="house"
                            onChange={this.onChange} />
                        <ControlLabel>Your Visage</ControlLabel>
                        <FormControl
                            className="text-box"
                            type="text"
                            value={this.state.imageLink}
                            placeholder="What do you look like?"
                            name="imageLink"
                            onChange={this.onChange} />
                            <img src={this.state.imageLink} />
                    </FormGroup>
                </form>
                {(this.state.name && this.state.house) && <p>You will be known as {this.state.name} of House {this.state.house}</p>}
                <button id="create-character-btn" onClick={this.nextBtn}>Next</button>
            </React.Fragment >
        )
    }
}

const CreateCharacter = connect(mapStateToProps, mapDispatchToProps)(ConnectCreateCharacter)

export default CreateCharacter;