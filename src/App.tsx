/** @format */

import React from "react";
import "./App.css";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Title from "./components/Title";
import Items from "./mockdata/Items";
import { ItemType } from "./types/itemtype";

interface StateType {
  items: ItemType[];
  showForm: boolean;
  valueItem: string;
  levelItem: number;
}

class App extends React.Component<{}, StateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      items: Items,
      showForm: false,
      valueItem: "",
      levelItem: 0,
    };
  }

  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  handleFormChangeName = (value: string) => {
    this.setState({
      valueItem: value,
    });
  };

  handleFormLevelItem = (value: number) => {
    this.setState({
      levelItem: value,
    });
  };

  handleCancelButton = () => {
    this.setState({
      showForm: false,
      valueItem: "",
      levelItem: 0,
    });
  };

  handleSubmitButton = () => {
    const { valueItem, levelItem } = this.state;
    if (valueItem == "") {
      alert("Vui lòng nhập tên công việc cần thêm");
    } else {
      const newID = Items.length + 1;
      const itemWithNewID = {
        id: newID.toString(),
        name: valueItem,
        level: levelItem,
      };
      Items.push(itemWithNewID);
      this.setState({
        items: Items,
        showForm: false,
        valueItem: "",
        levelItem: 0,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <Search />
          <Sort />
          <div
            className="col-xs-5 col-sm-5 col-md-5 col-lg-5"
            onClick={this.handleShowForm}
          >
            <button type="button" className="btn btn-info btn-block marginB10">
              {this.state.showForm == false ? "Add Item" : "Close"}
            </button>
          </div>
        </div>
        <Form
          showForm={this.state.showForm}
          valueItem={this.state.valueItem}
          handleFormChangeName={this.handleFormChangeName}
          levelItem={this.state.levelItem}
          handleFormLevelItem={this.handleFormLevelItem}
          handleCancelButton={this.handleCancelButton}
          handleSubmitButton={this.handleSubmitButton}
        />
        <ListItem items={this.state.items} />
      </div>
    );
  }
}

export default App;
