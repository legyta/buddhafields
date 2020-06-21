import React, { Component } from "react";
import SunSchedule from "./data/SunSchedule";
import activities from "./data/activities.json";
import day from "./stylesheets/day.css";
import bfLogo from "./images/bfLogo.svg";

export default class Sunday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sunday: activities,
    };
  }

  render() {
    return (
      <div className="day">
        {" "}
        <SunSchedule data={this.state.sunday} />
        <img className="image-wed" src={bfLogo} alt="" />
      </div>
    );
  }
}
