import React from "react";

export default function Sin(props) {
  return (
    <div className="sin-container">
      <div className="top-sin-bar">
        <h1>{props.name}</h1>
        <small>Scene {props.scene}</small>
      </div>
      <h3>{props.categeory}</h3>
      <p>{props.longDescription}</p>
      <hr></hr>
      <p>
        <strong>Fix:</strong> {props.fix}
      </p>
      <p href={props.reference}>
        <strong>Principle:</strong>
        {props.principle}
      </p>
    </div>
  );
}
