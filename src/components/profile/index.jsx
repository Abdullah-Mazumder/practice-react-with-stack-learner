import React from "react";

import Bio from "./Bio";
import Links from "./Links";
import Skills from "./Skills";

export default class Profile extends React.Component {
  me = {
    name: "Abdullah Mazumder",
    title: "Full Stack Web Developer",
    skillA: "Javascript",
    skillB: "Node JS",
    skillC: "React JS",
  };

  render() {
    return (
      <div className="container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Links />
      </div>
    );
  }
}
