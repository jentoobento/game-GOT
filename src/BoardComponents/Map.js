import React from "react";
// import Modal from "react-modal";

import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeCity } from "../redux/actions/index";

import "./Map.css";

window.changeCity = changeCity;

const mapDispatchToProps = dispatch => {
  return {
    changeCity: cityName => dispatch(changeCity(cityName))
  };
};

const mapStateToProps = cityName => {
  return { cityName: cityName };
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityModalOpen: false
    };
  }

  cityClick = e => {
    let city = e.target.parentElement.id
      ? e.target.parentElement.id
      : e.target.parentElement.parentElement.id;

    // send name of city to command bar component
    this.props.changeCity({
      cityName: city
    });

    // this.setState({
    //     cityModalOpen: true
    // })
  };

  closeModal = event => {
    this.setState({
      cityModalOpen: false
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Modal isOpen={this.state.cityModalOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="City Modal" ariaHideApp={false}>
                    <h4>
                        Winterfell
                    </h4>
                    <hr/>
                    <ul>
                        <li>gold: 100</li>
                        <li>man: 100</li>
                    </ul>
                </Modal> */}
        <div className="col-md-9" style={{ backgroundColor: "#101519" }}>
          <span id="winterfell">
            <FontAwesomeIcon
              className="map-icon"
              onClick={this.cityClick}
              icon="university"
            />
          </span>
          <img
            id="map"
            alt=""
            src="https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/The_known_world_HBO.jpg/revision/latest/scale-to-width-down/1000?cb=20130507121142"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
