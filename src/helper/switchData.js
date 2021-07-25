import { FETCH_GAME, QUERY } from "../actions/actions";

export const switchData = ({ storage, dispatch, payload }) => {
  switch (storage) {
    case "gameLists":
      dispatch({ type: FETCH_GAME, payload });
      break;

    case "query":
      dispatch({ type: QUERY, payload });
      break;

    default:
      break;
  }
};
