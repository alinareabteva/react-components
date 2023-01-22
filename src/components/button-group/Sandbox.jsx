import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../button/Button';

class Sandbox extends Component {
  state = {
    switchOn: true,
  }

  handleSwitchOn = () => {
    this.setState({ switchOn: true });
  }

  handleSwitchOff = () => {
    this.setState({ switchOn: false });
  }

  render() {
    const { switchOn } = this.state;

    return (
      <>

        <h2 className="text"><span>1. Horizontal button group:</span></h2>
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <h2 className="text"><span>2. Vertical button group:</span></h2>
        <ButtonGroup vertical>
          <Button>First</Button>
          <Button active>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <h2 className="text"><span>3. Switcher button group:</span></h2>
        <ButtonGroup>
          <Button onClick={this.handleSwitchOn} active={switchOn}>ON</Button>
          <Button onClick={this.handleSwitchOff} active={!switchOn}>OFF</Button>
        </ButtonGroup>

      </>
    );
  }
}

export default Sandbox;
