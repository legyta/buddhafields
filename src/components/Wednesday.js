import React, { Component } from "react";
import WedSchedule from "./data/WedSchedule";
import activities from "./data/activities.json";
import day from "./stylesheets/day.css";
import bfLogo from "./images/bfLogo.svg";
export default class Wednesday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wednesday: activities,
    };
  }

  render() {
    return (
      <div className="day">
        {" "}
        <img className="image-wed" src={bfLogo} alt="" />
        <WedSchedule data={this.state.wednesday} />
      </div>
    );
  }
}
