import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { allNamedCharacters, allCities } from "./MapHelper";

import "./CommandBar.css";

// import the action from redux for use
import { updateResources } from "../redux/actions/index";

// makes the imported action available to the dispatch
window.updateResources = updateResources;

// passes function as props to component
const mapDispatchToProps = dispatch => {
  return {
    // call the action which calls the reducer
    updateResources: resource => dispatch(updateResources(resource))
  };
};

// reducer comes back to here, which passes redux state as a prop to the component
const mapStateToProps = state => {
  return {
    resources: state.resources,
    turn: state.turn,
    season: state.season,
    currentPlayerPosition: state.currentPlayerPosition
  };
};

// COMMAND VARIABLES (change as needed)
const GOLD_NEEDED_TO_HIRE_MEN = 200;
const GOLD_GAINED_FROM_BTN_CLICK = 50;
const GOLD_GAINED_EACH_TURN = 25;
const MEN_GAINED_FROM_BTN_CLICK = 10;
const MEN_DIED_FROM_WINTER = 3;
const REP_GAINED_FROM_BTN_CLICK = 5;

class CommandBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: {
        gold: this.props.resources.gold,
        men: this.props.resources.men,
        reputation: this.props.resources.reputation
      },
      season: "Summer",
      turn: this.props.turn, // each turn is 1 month
      currentPlayerPosition: ""
    };
  }

  /**
   * Reputation slightly affects every command. If any other resource reaches 0,
   * you automatically lose some amount of reputation.
   */

  gainRepBtn = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        resources: {
          ...prevState.resources,
          reputation:
            this.state.resources.reputation + REP_GAINED_FROM_BTN_CLICK
        }
      };
    });
    this.endTurn();
  };

  /**
   * Gold increases every turn/month even if you do nothing. But using the 'Aquire Gold' command gives you
   * more gold than just waiting for it at the end of your turn/month.
   * Also if you have more reputation, the more gold you get increases.
   */

  aquireGoldBtn = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        resources: {
          ...prevState.resources,
          gold: Math.ceil(
            this.state.resources.gold +
              this.state.resources.reputation * 0.5 +
              GOLD_GAINED_FROM_BTN_CLICK
          )
        }
      };
    });
    this.endTurn();
  };

  /**
   * Hiring men requires gold. If you have no gold, you cannot hire men. Men will decrease when invading,
   * if someone invades you and decrease slowly during the month of winter.
   * Also if you have more reputation, you will be able to hire more men.
   */

  hireMenBtn = () => {
    if (this.state.resources.gold >= GOLD_NEEDED_TO_HIRE_MEN) {
      this.setState(prevState => {
        return {
          ...prevState,
          resources: {
            ...prevState.resources,
            gold: this.state.resources.gold - GOLD_NEEDED_TO_HIRE_MEN,
            men:
              this.state.resources.men +
              this.state.resources.reputation / 5 +
              MEN_GAINED_FROM_BTN_CLICK
          }
        };
      });
      this.endTurn();
    } else {
      console.log("not enough gold to hire men");
    }
  };

  invadeBtn = () => {
    console.log("fight!!!!!!");
  };

  /**
   * Each turn = 1 month. Every 3rd month the season will change. You get gold at the end of each turn/month
   * even if you do nothing. The amount of gold you get at the end of each turn/month increases slower
   * during winter and faster during spring. Men also die slowly during winter even if you do nothing.
   */

  endTurn(gold = GOLD_GAINED_EACH_TURN) {
    this.setState(
      prevState => {
        let men = prevState.resources.men;
        if (prevState.season === "Winter") {
          gold = GOLD_GAINED_EACH_TURN / 2;
          men =
            prevState.resources.men >= MEN_DIED_FROM_WINTER
              ? prevState.resources.men - MEN_DIED_FROM_WINTER
              : 0;
        } else if (prevState.season === "Spring") {
          gold = GOLD_GAINED_EACH_TURN * 1.25;
        }

        return {
          resources: {
            ...prevState.resources,
            gold: prevState.resources.gold + Math.ceil(gold),
            men: men
          },
          turn: this.state.turn + 1,
          season:
            prevState.turn % 3 === 0
              ? this.determineSeason(this.state.season)
              : this.state.season
        };
      },
      () => {
        this.props.updateResources({
          resources: {
            gold: this.state.resources.gold,
            men: this.state.resources.men,
            reputation: this.state.resources.reputation
          },
          turn: this.state.turn,
          season: this.state.season
        });
      }
    );
  }

  determineSeason(season) {
    if (season === "Spring") {
      return "Summer";
    }
    if (season === "Summer") {
      return "Fall";
    }
    if (season === "Fall") {
      return "Winter";
    }
    if (season === "Winter") {
      return "Spring";
    }
  }

  render(currentCity = "", namedCharacters = "") {
    if (this.props.currentPlayerPosition) {
      currentCity = allCities[this.props.currentPlayerPosition];
      if (currentCity.namedCharacters) {
        namedCharacters = currentCity.namedCharacters.reduce(
          (prev, curr) => {
            return prev.concat([curr.name]);
          },
          []
        ).join(', ') 
        
      } else {
        namedCharacters = "No noteworthy persons at this location";
      }
    }

    return (
      <React.Fragment>
        <div className="container col-md-3 command-area">
          <div className="resource-area">
            <h2>Resources</h2>
            <FontAwesomeIcon icon="bookmark" />{currentCity && currentCity.name}&nbsp;
            <FontAwesomeIcon icon="coins" />{currentCity && currentCity.resources.gold}&nbsp;
            <FontAwesomeIcon icon="user" />{currentCity && currentCity.resources.men}&nbsp;
            <br />
            <FontAwesomeIcon icon="trophy" />{currentCity && namedCharacters}&nbsp;
          </div>

          <h2>Commands</h2>
          <button onClick={this.gainRepBtn} className="btn btn">
            <FontAwesomeIcon icon="star" />
            Gain Reputation
          </button>
          <button onClick={this.aquireGoldBtn} className="btn btn">
            <FontAwesomeIcon icon="coins" />
            Aquire Gold
          </button>
          <button
            onClick={this.hireMenBtn}
            className="btn btn"
            disabled={this.state.gold < GOLD_NEEDED_TO_HIRE_MEN ? true : false}
          >
            <FontAwesomeIcon icon="user-plus" />
            Hire Men
          </button>
          <button onClick={this.invadeBtn} className="btn btn">
            <FontAwesomeIcon icon="bookmark" />
            Attempt to Invade
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandBar);
