/** @format */

import React from "react";
import { ItemType } from "../../types/itemtype";

interface ItemProp {
  item: ItemType;
}

export default class Item extends React.Component<ItemProp> {
  constructor(props: ItemProp) {
    super(props);
  }

  render() {
    const { item } = this.props;
    let classNameLabel = "";
    let nameLabel = "";
    switch (item.level) {
      case 1:
        classNameLabel = "label label-warning";
        nameLabel = "Medium";
        break;
      case 2:
        classNameLabel = "label label-danger";
        nameLabel = "High";
        break;
      default:
        classNameLabel = "label label-info";
        nameLabel = "Low";
        break;
    }
    return (
      <tr>
        <td className="text-center">{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
        <td className="text-center">
          <span className={classNameLabel}>{nameLabel}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning btn-sm mr">
            Edit
          </button>
          <button type="button" className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
