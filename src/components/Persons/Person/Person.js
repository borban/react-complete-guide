import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";

class Person extends Component {
  render() {
    console.log("[Person] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;
