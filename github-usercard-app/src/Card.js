import React from "react";
import "./App.css";

export default function Card(props) {
  return (
    <div className="cards">
      <p className="names">User: {props.names}</p>
      <img className="images" src={props.imgSrc} />
    </div>
  );
}
