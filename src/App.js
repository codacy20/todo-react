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
  }

  handleCLick = () => {

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

  handleChangeText = (value, id) => {
    console.log("here:" + value);
    console.log(`here ${id}`);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id,
          text: value,
          completed: false
        }
      ]
    });

    // const target = event.target;
    // console.log(target.value);
  };

  render() {
    var todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <template className="todo-list">
        {todoItems}
        <TodoItemEmpty
          handleChange={this.handleChangeText}
          // key={todoItems.length + 1}
          itemId={todoItems.length + 1}
        />
      </template>
    );
  }
}
