import React, { Component } from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";

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
    const buttonStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      buttonStyle.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = [red]
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button onClick={this.togglePersonsHandler} style={buttonStyle}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
