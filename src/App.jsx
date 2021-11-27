import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";

const ncard = (val) => {
  return (
    <Card
      imgsource={val.imgsource}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
};

function App() {
  return (
    <>
      <h1 className="heading_style"> List of top Eight Netflix Series</h1>
      {Sdata.map(ncard)};
    </>
  );
}

export default App;
