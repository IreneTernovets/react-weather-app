import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row">
          <ul>
            <li>
              Last updated: {props.day} {props.time}
            </li>
            <li>{props.sky}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col">
            <img src={props.img} alt={props.sky} />
          </div>
          <div className="col">
            <ul>
              <li>Humidity: {props.humidity}%</li>
              <li>Wind: {props.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}