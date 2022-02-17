import React from "react";

export default class IconButton extends React.Component {
  render() {
    return (
      <button className="icon-button" onClick={this.props.onClick}>
        {this.props.icon}
      </button>
    );
  }
}


