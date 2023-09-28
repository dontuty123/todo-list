/** @format */

import React, { Component } from "react";
import { ItemType } from "../../types/itemtype";

interface EditProps {
  showEditForm: boolean;
  editItem: ItemType;
  handleEditName: (value: string) => void;
  handleEditLevelItem: (value: number) => void;
  handleSubmitEditForm: (id: string) => void;
  handleHideEditForm: () => void;
}

export default class Edit extends Component<EditProps, ItemType> {
  constructor(props: EditProps) {
    super(props);

    this.state = {
      id: this.props.editItem.id,
      name: this.props.editItem.name,
      level: this.props.editItem.level,
    };
  }

  componentDidUpdate(prevProps: EditProps) {
    // Check if the editItem prop has changed
    if (prevProps.editItem !== this.props.editItem) {
      // Update the state with the new value
      this.setState({
        id: this.props.editItem.id,
        name: this.props.editItem.name,
        level: this.props.editItem.level,
      });
    }
  }

  handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event?.target.value;
    this.setState({ name: newName });
    this.props.handleEditName(newName);
  };

  handleLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLevel = Number(event?.target.value);
    this.setState({ level: newLevel });
    this.props.handleEditLevelItem(newLevel);
  };

  render() {
    if (this.props.showEditForm == false) return null;
    return (
      <tr>
        <td className="text-center">Edit</td>
        <td>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.handleName}
          />
        </td>
        <td className="text-center">
          <select
            className="form-control"
            value={this.state.level}
            onChange={this.handleLevel}
          >
            <option value={0}>Low</option>
            <option value={1}>Medium</option>
            <option value={2}>High</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-default btn-sm mr"
            onClick={this.props.handleHideEditForm}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={() =>
              this.props.handleSubmitEditForm(this.props.editItem.id)
            }
          >
            Save
          </button>
        </td>
      </tr>
    );
  }
}
