import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }
  render() {
    return (
      <div className="stopwatch">
        <h4>Stopwatch</h4>
        <Form inline>
          <FormControl
            className="stopwatch-input"
            placeholder="time on the clock"
          />
          <Button>Go!</Button>
        </Form>
        <div>{this.state.time}</div>
      </div>
    );
  }
}

export default Stopwatch;
