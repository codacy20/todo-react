import React, { Component } from "react";

export default class TodoItemEmpty extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#A9A9A9"
    };

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          id="click"
          //   checked={this.props.item.completed}
          //   onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <input
          id="click"
          onChange={event => this.props.handleChange(event, this.props.key2)}
          style={completedStyle}
        >
          {/* {this.props.text} */}
        </input>
      </div>
    );
  }
}
