/** @format */

import React, { Component } from "react";

interface SortType {
  handleSort: (value: number) => void;
}

interface StateType {
  name: string;
}

export default class Sort extends Component<SortType, StateType> {
  constructor(props: SortType) {
    super(props);

    this.state = {
      name: "ID ASC",
    };
  }

  handleData = (event: React.MouseEvent<HTMLLIElement>) => {
    const value = Number(event.currentTarget.getAttribute("data-value"));
    this.props.handleSort(value);
    switch (value) {
      case 0:
        this.setState({ name: "Name ASC" });
        break;
      case 1:
        this.setState({ name: "Name DESC" });
        break;
      case 2:
        this.setState({ name: "Level ASC" });
        break;
      case 3:
        this.setState({ name: "Level DESC" });
        break;
      case 4:
        this.setState({ name: "ID ASC" });
        break;
      case 5:
        this.setState({ name: "ID DESC" });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle mr"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu">
            <li role="button" data-value={4} onClick={this.handleData}>
              ID ASC
            </li>
            <li role="button" data-value={5} onClick={this.handleData}>
              ID DESC
            </li>
            <li role="separator" className="divider" />

            <li role="button" data-value={0} onClick={this.handleData}>
              Name ASC
            </li>
            <li role="button" data-value={1} onClick={this.handleData}>
              Name DESC
            </li>
            <li role="separator" className="divider" />
            <li role="button" data-value={2} onClick={this.handleData}>
              Level ASC
            </li>
            <li role="button" data-value={3} onClick={this.handleData}>
              Level DESC
            </li>
          </ul>
          <span className="label label-success label-medium">
            {this.state.name}
          </span>
        </div>
      </div>
    );
  }
}
