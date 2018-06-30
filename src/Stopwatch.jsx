import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 30,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  leadingZero(num) {
    return num < 10 ? "0" + num : num;
  }

  render() {
    return (
      <div className="stopwatch">
        <h4>Stopwatch</h4>
        <Form inline>
          <FormControl
            onChange={event => this.setState({ hours: event.target.value })}
            className="stopwatch-hours"
            placeholder="hours"
          />
          <FormControl
            onChange={event => this.setState({ minutes: event.target.value })}
            className="stopwatch-minutes"
            placeholder="minutes"
          />
          <FormControl
            onChange={event => this.setState({ seconds: event.target.value })}
            className="stopwatch-seconds"
            placeholder="seconds"
          />
          <Button>Go!</Button>
        </Form>
        <div>
          {this.leadingZero(this.state.hours)}:{this.leadingZero(
            this.state.minutes
          )}:{this.leadingZero(this.state.seconds)}
        </div>
      </div>
    );
  }
}

export default Stopwatch;
