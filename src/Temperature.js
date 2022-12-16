import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="mt-3">
        {props.celsius} <span>C° | F°</span>
      </div>
    </div>
  );
}
