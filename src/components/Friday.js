import React, { Component } from "react";
import FriSchedule from "./data/FriSchedule";
import activities from "./data/activities.json";
import day from "./stylesheets/day.css";
import logoTextSvg from "./images/logoTextSvg.svg";
import logoText from "./images/logoText.png";

export default class Friday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friday: activities,
    };
  }

  render() {
    return (
      <div className="day">
        {" "}
        {/* <img className="image-fri" src={logoTextSvg} alt="" /> */}
        <img className="image-fri" src={logoText} alt="" />
        <FriSchedule data={this.state.friday} />
        <img className="image-fri" src={logoText} alt="" />
      </div>
    );
  }
}
