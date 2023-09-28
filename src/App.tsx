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
import unidecode from "unidecode";

interface StateType {
  items: ItemType[];
  editItem: ItemType;
  showEditForm: boolean;
  showForm: boolean;
  valueItem: string;
  valueEditItem: string;
  levelEditItem: number;
  levelItem: number;
  deleteId: string;
  searchName: string;
}

class App extends React.Component<{}, StateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      items: Items,

      showEditForm: false,
      showForm: false,
      valueItem: "",
      levelItem: 0,

      //edit
      valueEditItem: "",
      levelEditItem: 0,
      deleteId: "",
      editItem: {
        id: "",
        level: 0,
        name: "",
      },

      //Search by name
      searchName: "",
    };
  }

  //Handle Form
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

  //handle Item
  handleEditName = (value: string) => {
    this.setState({
      valueEditItem: value,
    });
  };

  handleEditLevelItem = (value: number) => {
    this.setState({
      levelEditItem: value,
    });
  };

  handleDeleteItem = (value: string) => {
    const newArrItem = this.state.items.filter((item) => item.id != value);
    this.setState({
      items: newArrItem,
    });
  };

  handleShowEditForm = (item: ItemType) => {
    this.setState({
      editItem: item,
      valueEditItem: item.name,
      levelEditItem: item.level,
      showEditForm: true,
    });
  };

  handleSubmitEditForm = (id: string) => {
    const { valueEditItem, levelEditItem } = this.state;
    const newListItem = [];
    const items = this.state.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== id) {
        newListItem.push(items[i]);
      } else {
        const newItem = {
          id: items[i].id,
          name: valueEditItem,
          level: levelEditItem,
        };
        newListItem.push(newItem);
      }
    }
    this.setState({
      items: newListItem,
      showEditForm: false,
      valueEditItem: "",
      levelEditItem: 0,
    });
  };

  handleHideEditForm = () => {
    this.setState({
      showEditForm: false,
    });
  };

  //Search by name
  handleSearch = (searchString: string) => {
    this.setState({
      searchName: searchString,
    });

    const lowerCaseSearchString = unidecode(searchString.toLowerCase());
    const newSearchArr = Items.filter((item) =>
      unidecode(item.name.toLowerCase()).includes(lowerCaseSearchString)
    );
    this.setState({ items: newSearchArr });
    if (searchString == "") {
      this.setState({
        items: Items,
      });
    }
  };

  //Handle Sort
  handleSort = (value: number) => {
    const sortedItems = [...this.state.items];
    if (value == 0) {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      this.setState({ items: sortedItems });
    } else if (value == 1) {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
      this.setState({ items: sortedItems });
    } else if (value == 2) {
      sortedItems.sort((a, b) => a.level - b.level);
      this.setState({ items: sortedItems });
    } else if (value == 3) {
      sortedItems.sort((a, b) => b.level - a.level);
      this.setState({ items: sortedItems });
    } else if (value == 4) {
      sortedItems.sort((a, b) => a.id.localeCompare(b.id));
      this.setState({ items: sortedItems });
    } else if (value == 5) {
      sortedItems.sort((a, b) => b.id.localeCompare(a.id));
      this.setState({ items: sortedItems });
    }
  };

  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <Search
            handleSearch={this.handleSearch}
            searchName={this.state.searchName}
          />
          <Sort handleSort={this.handleSort} />
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
        <ListItem
          items={this.state.items}
          handleDeleteItem={this.handleDeleteItem}
          showEditForm={this.state.showEditForm}
          handleShowEditForm={this.handleShowEditForm}
          editItem={this.state.editItem}
          handleEditName={this.handleEditName}
          handleEditLevelItem={this.handleEditLevelItem}
          valueEditItem={this.state.valueEditItem}
          levelEditItem={this.state.levelEditItem}
          handleSubmitEditForm={this.handleSubmitEditForm}
          handleHideEditForm={this.handleHideEditForm}
        />
      </div>
    );
  }
}

export default App;
