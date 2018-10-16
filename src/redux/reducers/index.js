const initialState = {
    players: {}
    , resources: {
        gold: 500
        , men: 50
        , reputation: 0
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return { ...state, players: action.payload };
        case "UPDATE_RESOURCES":
            return { ...state, resources: action.payload };
        default:
            return state;
    }
};

export default rootReducer;