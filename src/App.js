import React from "react";
import "./App.sass";
import ListItems from "./ListItems.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  updateItem(value, keyInput) {
    console.log(value, keyInput);
    const listItems = this.state.items.map((item) => {
      if (item.key === keyInput) {
        item.text = value;
      }
      return item;
    });

    this.setState({
      items: listItems,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="nav-bar-dashboard"></div>
        <section className="dashboard-card">
          <div className="main-dashboard-card">
            <h1>To-do List</h1>
            <div className="content">
              <form id="to-do-list-cont" onSubmit={this.addItem}>
                <input className="input-main-dashboard"
                  type="text"
                  placeholder="Ingrese la tarea"
                  value={this.state.currentItem.text}
                  onChange={this.handleInput}
                ></input>
                <button type="submit">
                  +
                </button>
              </form>
              <ListItems
                items={this.state.items}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
              ></ListItems>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
