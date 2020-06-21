import React, { Component } from "react";
import ThuSchedule from "./data/ThuSchedule";
import activities from "./data/activities.json";
import day from "./stylesheets/day.css";
import bitwLogo from "./images/bitwLogo.png";
export default class Thursday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thursday: activities,
    };
  }

  render() {
    return (
      <div className="day">
        {" "}
        <div className="image-thu-container">
          <img className="image-wed" src={bitwLogo} alt="" />
          <img className="image-thu" src={bitwLogo} alt="" />
          <img className="image-wed" src={bitwLogo} alt="" />
        </div>
        <ThuSchedule data={this.state.thursday} />
      </div>
    );
  }
}
