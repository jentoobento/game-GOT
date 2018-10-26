import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { addPlayer } from "./redux/actions/index";
import { generateRandom } from "./CreateCharacterHelper";

import "./CreateCharacter.css";

window.addPlayer = addPlayer;

const mapStateToProps = state => {
  return { players: state.players };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: player => dispatch(addPlayer(player))
  };
};
class ConnectCreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      house: "",
      image: "",
      imageLink: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  nextBtn = () => {
    this.props.addPlayer(this.state);
    this.props.history.push("/board");
  };

  uploadImg = () => {
    console.log("upload image click");
  };

  randomName = () => {
    this.setState({
      name: generateRandom(1)
    });
  };

  randomHouse = () => {
    this.setState({
      house: generateRandom(0, 1)
    });
  };

  randomImage = () => {
    console.log(generateRandom(0, 0, 1));
    this.setState({
      imageLink: generateRandom(0, 0, 1)
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="container create-character">
          <FormGroup controlId="formBasicText">
            <ButtonToolbar>
              <h1>Who are you?</h1>

              <div id="name-container">
                <ControlLabel>Your Name</ControlLabel>
                <br />
                <FormControl
                  className="text-box"
                  type="text"
                  value={this.state.name}
                  placeholder="What do you wish to be called?"
                  name="name"
                  onChange={this.onChange}
                />
                <Button
                  bsSize="small"
                  onClick={this.randomName}
                  id="btnRandName"
                >
                  Random
                </Button>
              </div>

              <div id="house-container">
                <ControlLabel>House Name</ControlLabel>
                <br />
                <FormControl
                  className="text-box"
                  type="text"
                  value={this.state.house}
                  placeholder="What is the name of your house?"
                  name="house"
                  onChange={this.onChange}
                />
                <Button
                  bsSize="small"
                  onClick={this.randomHouse}
                  id="btnRandHouse"
                >
                  Random
                </Button>
              </div>

              {this.state.name &&
                this.state.house && (
                  <p>You will be known as {this.state.name} from House {this.state.house}</p>
                )}

              <div id="image-container">
                <ControlLabel>Your Visage</ControlLabel>
                <br />
                <Button
                  bsSize="small"
                  onClick={this.uploadImg}
                  id="btnUploadImg"
                >
                  Upload
                </Button>
                <Button
                  bsSize="small"
                  onClick={this.randomImage}
                  id="btnRandImg"
                >
                  Random
                </Button>
                <img alt="" src={this.state.imageLink} id="player-image" />
                <img
                  alt=""
                  src={this.state.imageLink}
                  id="player-image-small"
                />
              </div>
            </ButtonToolbar>
          </FormGroup>
        </form>
        <button id="create-character-btn" onClick={this.nextBtn}>
          Next
        </button>
      </React.Fragment>
    );
  }
}

const CreateCharacter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectCreateCharacter);

export default CreateCharacter;
