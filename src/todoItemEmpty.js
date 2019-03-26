import React, { Component } from "react";

export default class TodoItemEmpty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleClick = () => {
    this.props.handleChange(this.state.inputValue, this.props.itemId)

    this.setState({ inputValue: "" })
  }
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
          type="text"
          value={this.state.inputValue}
          onChange={event =>
            this.setState({ inputValue: event.currentTarget.value })
          }
          style={completedStyle}
        />
        <button
          onClick={() =>
            this.handleClick()
          }
        >
          Press
        </button>
        {/* {this.props.text} */}
      </div>
    );
  }
}
