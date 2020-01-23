import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card";

export const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster, key) => {
        return (
          <h1 key={monster.id}>
            <Card monster={monster} />
          </h1>
        );
      })}
    </div>
  );
};
