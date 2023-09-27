/** @format */

import React from "react";

interface PropsType {
  showForm: boolean;
  valueItem: string;
  handleFormChangeName: (value: string) => void;
  levelItem: number;
  handleFormLevelItem: (value: number) => void;
  handleCancelButton: () => void;
  handleSubmitButton: () => void;
}

export default class Form extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  render() {
    if (this.props.showForm === false) return null;
    return (
      <div className="row marginB10">
        <div className="col-md-offset-7 col-md-5">
          <form className="form-inline">
            <div className="form-group">
              <input
                type="text"
                className="form-control mr"
                placeholder="Item Name"
                value={this.props.valueItem}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.props.handleFormChangeName(event.target.value)
                }
              />
            </div>
            <div className="form-group mr">
              <select
                className="form-control"
                value={this.props.levelItem}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  this.props.handleFormLevelItem(Number(event.target.value))
                }
              >
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary mr"
              onClick={this.props.handleSubmitButton}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.props.handleCancelButton}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}
