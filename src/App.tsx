/** @format */

import "./App.css";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <Title />
      <div className="row">
        <Search />
        <Sort />
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button type="button" className="btn btn-info btn-block marginB10">
            Add Item
          </button>
        </div>
      </div>
      <Form />
      <ListItem />
    </div>
  );
}

export default App;
