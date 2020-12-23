import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn >Modal</MDBBtn>
      <MDBModal id="modal_section" isOpen={this.state.modal} toggle={this.toggle} size="lg" centered>
      <div data-test="modal-header" id="close" class="modal-header">
        <h4 class="modal-title">
          <div class="text-center modal_heading">
          <img src="images/checkerIcon.svg" alt="checker"/>
            <h1>Get Early Update</h1></div>
         </h4>
          <button onClick={this.toggle} type="button" class="close" aria-label="Close">
          <img src="images/close.svg" alt="checker"/>
         </button>
           </div>
      
        <MDBModalBody>
        <form id="modal_form">
            <div class="group">
              <input type="text" placeholder="Full Name" id="name"/>
              <label for="name">Full Name</label>
            </div>

            <div class="group">
              <input type="tel" placeholder="Phone Number" id="Phone Number"/>
              <label for="phone">Phone Number</label>
            </div>
            <div class="group">
             <button type="submit">Get lunch invite</button>
            </div>

        </form>
        </MDBModalBody>
        {/* <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter> */}
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;