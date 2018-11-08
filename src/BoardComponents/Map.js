import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeCity } from "../redux/actions/index";
import { allCities } from "./MapHelper";

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
  };

  render() {
    const cities = Object.keys(allCities).map(city => {
      return(
        <span id={allCities[city].id} key={allCities[city].id}>
            <FontAwesomeIcon
              className="map-icon"
              style={allCities[city].location}
              onClick={this.cityClick}
              icon="university"
            />
          </span>
      )
    })
    return (
      <React.Fragment>
        <div className="col-md-9" style={{ backgroundColor: "#101519" }}>
          {cities}
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
