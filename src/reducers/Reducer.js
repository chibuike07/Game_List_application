import { FETCH_GAME, QUERY } from "../actions/actions";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_GAME:
      return { ...state, gameLists: action.payload };

    case QUERY:
      return { ...state, query: action.payload };

    default:
      return state;
  }
};

export default reducer;
