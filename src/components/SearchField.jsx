import React, { useContext, useEffect, useState } from "react";
import DataList from "../common/DataLstComponent/DataList";
import Input from "../common/Input.component/Input";
import { ContextForClient } from "../contextfile/ClientContext";
import {
  getGameByGroup,
  getLoadGamesTopic,
  handleToggleField,
  loadGameByGroupLevel,
  loadGameByTopic,
} from "../util/searchFieldsLogic";
import { handleQueries } from "../util/SwitchFunc";

const SearchField = () => {
  const [topic, setTopic] = useState("");
  const [_query, setQuery] = useState([]);
  const [queryGames, setQueryGames] = useState("");
  const [queryTopic, setQueryTopic] = useState([]);
  const [queryOption, setQueryOption] = useState("Group");
  const [toggleField, setToggleField] = useState(false);
  const [displayField, setDisplayField] = useState("Topic");
  const [{ gameLists }, dispatch] = useContext(ContextForClient);

  useEffect(() => {
    let subscribe = true;
    getLoadGamesTopic({ setQueryTopic, subscribe, gameLists });
    getGameByGroup({ setQuery, gameLists });
    handleToggleField({ displayField, setToggleField });

    return () => {
      subscribe = false;
    };
  }, [gameLists, dispatch, displayField]);
  return (
    <>
      <form
        className={
          "form-controlcontainer-fluid d-flex aligh-items-center justify-content-center"
        }
      >
        {!toggleField && (
          <Input
            type="search"
            placeholder="Game Topic"
            name="search-game"
            value={topic}
            list="search"
            className="form-control w-100 m-3 "
            onChange={(e) => loadGameByTopic({ e, dispatch, setTopic })}
          />
        )}
        <DataList id="search" dataArray={queryTopic} />
        {toggleField && (
          <Input
            type="text"
            placeholder="Games-Group | Level"
            name="query-games"
            list="query"
            value={queryGames}
            className="form-control w-100 m-3 "
            onChange={(e) =>
              loadGameByGroupLevel({ e, dispatch, queryOption, setQueryGames })
            }
          />
        )}
        <DataList id="query" dataArray={_query} />
      </form>

      <section className="d-flex justify-content-center">
        <form className="form-group d-flex w-100 justify-content-center">
          <Input
            type="text"
            placeholder={`Group & Level seach`}
            name="query-games"
            list="bagde"
            value={queryOption}
            minWidth="100px"
            width="10%"
            className="form-control m-3 col-md-3 col-xs-3"
            onChange={(e) =>
              handleQueries({
                e,
                displayField,
                setQueryOption,
                gameLists,
                setQuery,
              })
            }
          />
          <DataList id="bagde" dataArray={["Group", "Level"]} />

          <Input
            type="text"
            placeholder="Topic"
            name="toggleField"
            list="toggleField"
            minWidth="100px"
            width="10%"
            value={displayField}
            className="form-control m-3 col-md-3 col-xs-3"
            onChange={(e) => setDisplayField(e.target.value)}
          />
          <DataList id="toggleField" dataArray={["Topic", "Group & Level"]} />
        </form>
      </section>
    </>
  );
};

export default SearchField;
