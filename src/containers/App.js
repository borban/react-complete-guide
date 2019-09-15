import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    //Find the index of the person comp that needs the name changed
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //Copy the person from the original state array
    const person = {
      ...this.state.persons[personIndex]
    };

    //Update the name from the event that triggered the update
    person.name = event.target.value;

    //Make another copy of original array and then update the name
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //Merge the original state with the updated one
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
