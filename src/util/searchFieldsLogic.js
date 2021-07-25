import { QUERY } from "../actions/actions";

export const getGameByGroup = ({ gameLists, setQuery }) => {
  const filterGroup = gameLists && gameLists.map(({ Group }) => Group);
  setQuery(() => filterGroup);
};

export const getGameByLevel = ({ gameLists, setQuery }) => {
  const filterLevel = gameLists && gameLists.map(({ Level }) => Level);
  setQuery(() => filterLevel);
};

export const loadGameByGroupLevel = ({
  e,
  dispatch,
  queryOption,
  setQueryGames,
}) => {
  e.preventDefault();
  setQueryGames(e.target.value);

  queryOption === "Group" && dispatch({ type: QUERY, payload: e.target.value });
  queryOption === "Level" && dispatch({ type: QUERY, payload: e.target.value });
};

export const loadGameByTopic = ({ e, setTopic, dispatch }) => {
  e.preventDefault();
  setTopic(e.target.value);
  dispatch({ type: QUERY, payload: e.target.value });
};

export const handleToggleField = ({ displayField, setToggleField }) => {
  displayField === "Topic"
    ? setToggleField((prev) => false)
    : displayField === "Group & Level" && setToggleField((prev) => true);
};

export const getLoadGamesTopic = ({ gameLists, setQueryTopic, subscribe }) => {
  const filterTopics = gameLists && gameLists.map(({ Topic }) => Topic);
  subscribe && setQueryTopic(() => filterTopics);
};

export const colors = ["#62d2d7", "#36498c", "#e55737", "#19a3bd", "#fb6f6c"];
