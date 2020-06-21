import React, { Component } from "react";
import SatSchedule from "./data/SatSchedule";
import activities from "./data/activities.json";
import day from "./stylesheets/day.css";
import bitwLogo from "./images/bitwLogo.png";

export default class Saturday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saturday: activities,
    };
  }

  render() {
    return (
      <div className="day">
        {" "}
        <SatSchedule data={this.state.saturday} />
        <div className="image-sat-container">
          <img className="image-wed" src={bitwLogo} alt="" />
          <img className="image-thu" src={bitwLogo} alt="" />
          <img className="image-wed" src={bitwLogo} alt="" />
        </div>
      </div>
    );
  }
}
