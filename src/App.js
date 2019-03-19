import React, { Component } from "react";
import "./App.css";
import todosData from "./todosData";
import TodoItem from "./todoItem";
import TodoItemEmpty from "./todoItemEmpty";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData,
      new: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChange(id) {
    console.log("yay" + id);
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

  handleChangeText(event) {
    console.log("here:" + event);

    // const target = event.target;
    // console.log(target.value);
  }

  render() {
    var todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    todoItems.push(
      <TodoItemEmpty
        handleChange={this.handleChangeText}
        key={todoItems.length + 1}
        key2={todoItems.length + 1}
      />
    );
    return <div className="todo-list">{todoItems}</div>;
  }
}
