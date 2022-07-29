import React from "react";

export default class Bio extends React.Component {
  render() {
    const {name, title} = this.props
    return (
      <div className="bio">
        <h3>{name}</h3>
        <p className="mb-1">{title}</p>
      </div>
    );
  }
}
