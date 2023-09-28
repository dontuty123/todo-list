/** @format */

import React, { Component } from "react";

interface SearchType {
  handleSearch: (searchString: string) => void;
  searchName: string;
}

export default class Search extends Component<SearchType, any> {
  constructor(props: SearchType) {
    super(props);

    this.state = {
      name: this.props.searchName,
    };
  }

  componentDidUpdate(prevProps: SearchType) {
    // Kiểm tra xem props searchName đã thay đổi so với props trước đó
    if (this.props.searchName !== prevProps.searchName) {
      // Nếu đã thay đổi, cập nhật state name bằng giá trị mới của searchName
      this.setState({
        name: this.props.searchName,
      });
    }
  }

  handleClear = () => {
    this.props.handleSearch("");
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control mr"
            placeholder="Search item name"
            value={this.state.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              this.props.handleSearch(event.target.value)
            }
          />
          <span className="input-group-btn">
            <button
              className="btn btn-info"
              type="button"
              onClick={this.handleClear}
            >
              Clear
            </button>
          </span>
        </div>
      </div>
    );
  }
}
