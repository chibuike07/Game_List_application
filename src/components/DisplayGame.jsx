import React, { useContext, useEffect } from "react";
import { ContextForClient } from "../contextfile/ClientContext";
import { fetchRequest } from "../helper/CustomFetch";
import { filterQuery } from "../util/searchQuerys";
import CustomGameList from "./CustomGameList";

const DisplayGame = () => {
  const [{ gameLists, query }, dispatch] = useContext(ContextForClient);
  const url = `/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter`,
    storage = "gameLists";

  useEffect(() => {
    let subscribe = true;
    subscribe && fetchRequest({ url, storage, dispatch });
    return () => {
      subscribe = false;
    };
  }, [dispatch, url]);

  return (
    <div>
      {filterQuery ? (
        filterQuery({ gameLists, query }).map(
          ({ GameTitle, GameDescription, GameImage }, idx) => (
            <CustomGameList
              key={idx}
              GameImage={GameImage}
              GameTitle={GameTitle}
              GameDescription={GameDescription}
            />
          )
        )
      ) : (
        <div>
          <p>Sorry no games is availiable at the moment. </p>
        </div>
      )}
    </div>
  );
};

export default DisplayGame;
