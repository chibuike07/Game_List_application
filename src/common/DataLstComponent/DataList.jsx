import React from "react";

const DataList = ({ dataArray, id }) => {
  return (
    <datalist id={id}>
      {dataArray &&
        dataArray
          .filter((v, i, a) => a.indexOf(v) === i)
          .map((value, index) => <option key={index}>{value}</option>)}
    </datalist>
  );
};

export default DataList;
