import React, { Component } from "react";
import "./App.css";
import todosData from "./todosData";
import TodoItem from "./todoItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return prevState;
    });
  }

  render() {
    var todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}
