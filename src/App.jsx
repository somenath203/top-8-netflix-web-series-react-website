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
      <h1 className="heading_style"><b> List of top Eight Netflix Series </b></h1>
      {Sdata.map(ncard)};
      <h1 className="heading_style"><center><b> Created by Somenath Choudhury </b></center></h1>
    </>
  );
}

export default App;
