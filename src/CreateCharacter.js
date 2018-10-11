import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import './CreateCharacter.css'
import  { connect } from "react-redux";
import { addPlayer } from "./redux/actions/index";

window.addPlayer = addPlayer;

const mapStateToProps = state => {
    return { players: state.players}
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
                <form className="container">
                    <FormGroup controlId="formBasicText">
                        <h1>Who are you?</h1>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            className="text-box"
                            type="text"
                            value={this.state.name}
                            placeholder="What do you wished to be called?"
                            name="name"
                            onChange={this.onChange} />
                        <ControlLabel>House</ControlLabel>
                        <FormControl
                            className="text-box"
                            type="text"
                            value={this.state.house}
                            placeholder="What is the name of your house?"
                            name="house"
                            onChange={this.onChange} />
                    </FormGroup>
                </form>
                {(this.state.name && this.state.house) && <p>You will be known as {this.state.name} of House {this.state.house}</p>}
                <button onClick={this.nextBtn}>Next</button>
            </React.Fragment>
        )
    }
}

const CreateCharacter = connect(mapStateToProps, mapDispatchToProps)(ConnectCreateCharacter)

export default CreateCharacter;