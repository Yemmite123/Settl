import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {  MDBModal, MDBModalBody } from 'mdbreact';


export class GetUpdate extends Component {
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
        <div className="view">
            <div id="get_update" className="container-fluid">
                <div className="row row_top2">  
                    <div className="col-md-12">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <div className="text-center get_update">
                                <h1>Settl for more with smooth, safer mobile banking experience like never before</h1>
                                <button onClick={this.toggle}>Keep me updated</button>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <MDBModal id="modal_section" isOpen={this.state.modal} toggle={this.toggle} size="lg" centered>
      <div data-test="modal-header" id="close" className="modal-header">
        <h4 className="modal-title">
          <div className="text-center modal_heading">
           <center> <br/>
              <img src="images/checkerIcon.svg" alt="checker"/></center>
            <h1>Get Early Update</h1></div>
         </h4>
          <button onClick={this.toggle} type="button" className="close" aria-label="Close">
          <img src="images/close.svg" alt="checker"/>
         </button>
           </div>
      
        <MDBModalBody>
        <form id="modal_form">
            <div className="group">
              <input type="text" placeholder="Full Name" id="name" required/>
              <label htmlFor="name">Full Name</label>
            </div>

            <div className="group">
              <input type="number" placeholder="Phone Number" id="Phone Number" required/>
              <label htmlFor="phone">Phone Number</label>
            </div>

            <div className="group">
              <input type="email" placeholder="Email Address" id="Email" required/>
              <label htmlFor="phone">Email Address</label>
            </div>
            <div className="group">
             <button type="submit">Get lunch invite</button>
            </div>

        </form>
        </MDBModalBody>
        {/* <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter> */}
      </MDBModal>
        </div>

    )
}

}

export default GetUpdate
