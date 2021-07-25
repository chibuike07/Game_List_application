import { infoToastify } from "../common/react_toastify/toastify";
import { getGameByGroup, getGameByLevel } from "./searchFieldsLogic";

export const handleQueries = ({
  e,
  displayField,
  setQueryOption,
  gameLists,
  setQuery,
}) => {
  e.preventDefault();
  if (displayField === "Topic")
    return infoToastify(
      "Kindly specify the Group & Level option from the next dropdown"
    );
  setQueryOption(e.target.value);
  switch (e.target.value) {
    case "Group":
      getGameByGroup({ gameLists, setQuery });

      break;
    case "Level":
      getGameByLevel({ gameLists, setQuery });

      break;

    default:
      break;
  }
};
