import React, { Component, Fragment } from "react";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person] rendering...");
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default withClass(Person, classes.Person);
