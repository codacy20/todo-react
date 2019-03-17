import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#A9A9A9",
      textDecoration: "line-through"
    };

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          id="click"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <p
          id="click"
          onClick={() => this.props.handleChange(this.props.item.id)}
          style={this.props.item.completed ? completedStyle : null}
        >
          {this.props.item.text}
        </p>
      </div>
    );
  }
}
