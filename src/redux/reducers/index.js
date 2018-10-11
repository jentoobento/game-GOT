const initialState = {
    players:{}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
          return {...state, players:action.payload};
        default:
          return state;
      }
};

export default rootReducer;