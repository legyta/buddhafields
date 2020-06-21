import React from "react";
//import day from "./stylesheets/day.scss";

export default class SunSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function () {
    return Object.keys(this.props.data[0].day5[0]);
  };

  getHeader = function () {
    let keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  getRowsData = function () {
    let items = this.props.data[0].day5;
    let keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead className="table-title">
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody className="table-content">{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}

const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};
