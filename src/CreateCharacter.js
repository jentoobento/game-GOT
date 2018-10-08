import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
//import axios from 'axios';
import './CreateCharacter.css'

class CreateCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            playerHouse: ''
        }
    }

    componentDidMount() {
        // https://api.got.show/api/characters/

        // axios({
        //     method: 'GET',
        //     url: 'https://api.got.show/api/houses/'
        // })
        //     .then(allHouses => {
        //         this.setState({
        //             houses: allHouses.data.map(house => house.name)
        //         })
        //     })
        //     .catch(err => console.log(err));


    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    nextBtn = () => {
        console.log('go to next page')
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
                            value={this.state.playerName}
                            placeholder="What do you wished to be called?"
                            name="playerName"
                            onChange={this.onChange} />
                        <ControlLabel>House</ControlLabel>
                        <FormControl
                            className="text-box"
                            type="text"
                            value={this.state.playerHouse}
                            placeholder="What is the name of your house?"
                            name="playerHouse"
                            onChange={this.onChange} />
                    </FormGroup>
                </form>
                <p>You will be known as {this.state.playerName} of House {this.state.playerHouse}</p>
                <button onClick={this.nextBtn}>Next</button>
            </React.Fragment>
        )
    }
}

export default CreateCharacter;