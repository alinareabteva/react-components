import React, { Component } from 'react';
import Modal from './Modal';
import Button from '../button/Button';

class Sandbox extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Yes function!');
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <>

        <h2 className="text"><span>1. Base Dialog (Modal) window:</span></h2>
        <Button onClick={this.openModal}>Show modal</Button>
        <Modal
          title="The confirmation"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        <p>
          Your data won't be saved! Are you sure you want to quit registration process?
        </p>
        </Modal>

      </>
    );
  }
}

export default Sandbox;