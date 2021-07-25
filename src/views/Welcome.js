import React from "react";
import DisplayGame from "../components/DisplayGame";
import SearchField from "../components/SearchField";

const Welcome = () => {
  return (
    <main className="w-100" style={{ backgroundColor: "#19a3bd " }}>
      <SearchField />
      <DisplayGame />
    </main>
  );
};

export default Welcome;
