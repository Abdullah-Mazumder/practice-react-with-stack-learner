import React from "react";

export default class Skills extends React.Component {
  render() {
    const {skillA, skillB, skillC} = this.props
    return (
      <div className="skills">
        <h3>Skills: </h3>
        <ul>
          <li>{skillA}</li>
          <li>{skillB}</li>
          <li>{skillC}</li>
        </ul>
      </div>
    );
  }
}
