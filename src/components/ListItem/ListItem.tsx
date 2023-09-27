/** @format */

import React from "react";
import Item from "../Item";
import Edit from "../Edit";
import { ItemType } from "../../types/itemtype";

interface ItemsType {
  items: ItemType[];
}

export default class ListItem extends React.Component<ItemsType> {
  constructor(props: ItemsType) {
    super(props);
  }
  // constructor(props: ItemType[]) {
  //   super(props);
  //   this.state = {
  //     items: Items as ItemType[],
  //   };
  //   this.renderItem = this.renderItem.bind(this)
  // }
  renderItem = (): JSX.Element[] => {
    const { items } = this.props;
    return items.map((item: ItemType, index: number) => (
      <Item item={item} key={index} />
    ));
  };

  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Name</th>
              <th style={{ width: "15%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItem()}
            <Edit />
          </tbody>
        </table>
      </div>
    );
  }
}
