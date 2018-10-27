const initialState = {
  players: {},
  turn: 1,
  season: "Summer",
  resources: {
    gold: 500,
    men: 50,
    reputation: 0
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return { ...state, players: action.payload };
    case "UPDATE_RESOURCES":
      return {
        ...state,
        resources: action.payload.resources,
        turn: action.payload.turn,
        season: action.payload.season
      };
    case "CHANGE_CITY":
      return {
          ...state,
        currentPlayerPosition: action.payload.cityName
      };
    default:
      return state;
  }
};

export default rootReducer;
