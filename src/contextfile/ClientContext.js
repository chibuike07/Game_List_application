import React, { useReducer } from "react";
import reducer from "../reducers/Reducer";

export const ContextForClient = React.createContext([{}, () => {}]);

const ClientContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    gameLists: [],
    query: "",
  });

  return (
    <ContextForClient.Provider value={[state, dispatch]}>
      {props.children}
    </ContextForClient.Provider>
  );
};

export default ClientContextProvider;
