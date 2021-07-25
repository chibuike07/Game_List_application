import React from "react";
import Image from "../common/Image.component/Image";
import { colors } from "../util/searchFieldsLogic";

const CustomGameList = ({ GameTitle, GameDescription, GameImage }) => {
  const gamesProps = GameTitle && (
    <section
      className="card w-100 mb-3"
      style={{
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        color: "#fff",
      }}
    >
      <figure className="img-group">
        <Image
          className="card-img w-100"
          src={GameImage}
          alt={GameTitle}
          height="40vh"
        />
      </figure>

      <h3 className="card-title p-2 text-capitalize text-decoration-underline">
        {GameTitle}
      </h3>
      <div className="card-body">
        <p className="card-text">{GameDescription}</p>
      </div>
    </section>
  );

  return <article className="container-fluid">{gamesProps}</article>;
};

export default CustomGameList;
