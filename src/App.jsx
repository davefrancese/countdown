import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock.jsx";
import Stopwatch from "./Stopwatch.jsx";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, 2018",
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown To {this.state.deadline}</div>
        <div>
          <Clock deadline={this.state.deadline} />
          <Form inline>
            <FormControl
              className="deadline-input"
              placeholder="new date"
              onChange={event =>
                this.setState({ newDeadline: event.target.value })
              }
            />
            <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
