import React from "react";
import Wednesday from "./components/Wednesday";
import Thursday from "./components/Thursday";
import Friday from "./components/Friday";
import Saturday from "./components/Saturday";
import Sunday from "./components/Sunday";
import Footer from "./components/Footer";
import app from "./components/stylesheets/app.css";
//import webTextCropped from "./components/images/webTextCropped.jpg";
import bfLogo from "./components/images/bfLogo.svg";
import online from "./components/images/online.jpg";
import bitwLogo from "./components/images/bitwLogo.png";

class App extends React.Component {
  state = {
    isWednesdayMounted: false,
    isThursdayMounted: false,
    isFridayMounted: false,
    isSaturdayMounted: false,
    isSundayMounted: false,
    response: false,
  };

  toggleWednesday = () => {
    this.setState({
      isWednesdayMounted: !this.state.isWednesdayMounted,
    });
  };

  toggleThursday = () => {
    this.setState({
      isThursdayMounted: !this.state.isThursdayMounted,
    });
  };

  toggleFriday = () => {
    this.setState({
      isFridayMounted: !this.state.isFridayMounted,
    });
  };

  toggleSaturday = () => {
    this.setState({
      isSaturdayMounted: !this.state.isSaturdayMounted,
    });
  };

  toggleSunday = () => {
    this.setState({
      isSundayMounted: !this.state.isSundayMounted,
    });
  };

  render() {
    return (
      <div className="app">
        {" "}
        <img
          className="logo-image"
          // src={online}
          //src={webTextCropped}
          src="https://www.buddhafield.com/sites/default/files/styles/page_header_image/public/images/headers/BitW%20website%20image.jpg?itok=7PuiC4XG"
          alt="title"
        />
        <div className="schedule">
          <div>
            <button onClick={this.toggleWednesday}>Wednesday</button>
          </div>
          <div>
            {this.state.isWednesdayMounted ? (
              <div>
                <Wednesday />{" "}
              </div>
            ) : null}
          </div>
          <div className="app-image-thu">
            <img className="app-image-bfLogo" src={bfLogo} alt="" />
            <button onClick={this.toggleThursday}>Thursday</button>
          </div>
          {/* <div className="app-image-wed">
            <img className="image-wed" src={bfLogo} alt="" />
          </div> */}
          <div>
            {this.state.isThursdayMounted ? (
              <div>
                <Thursday />{" "}
              </div>
            ) : null}
          </div>
          <div>
            <button onClick={this.toggleFriday}>Friday</button>
          </div>
          <div>
            {this.state.isFridayMounted ? (
              <div>
                <Friday />{" "}
              </div>
            ) : null}
          </div>
          <div className="app-image-thu">
            <button onClick={this.toggleSaturday}>Saturday</button>
            <img className="app-image-bfLogo" src={bfLogo} alt="" />
          </div>
          <div>
            {this.state.isSaturdayMounted ? (
              <div>
                <Saturday />{" "}
              </div>
            ) : null}
          </div>
          <div>
            <button onClick={this.toggleSunday}>Sunday</button>
          </div>
          <div>
            {this.state.isSundayMounted ? (
              <div>
                <Sunday />{" "}
              </div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
