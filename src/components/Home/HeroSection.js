import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { MDBModal, MDBModalBody } from 'mdbreact';

export class HeroSection extends Component {
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
    <div className="view" id="HeroSection">
     <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
      <div id="page1_spacing" className="container-fluid">
            <div className="row row_top">
                <div className="col-md-6">
                      <div className="hero_contents">
                          <span className="new"><button>NEW</button> </span>
                          <span className="coming_soon"> COMING SOON</span>
                      </div>
                    <div className="hero_heading">
                      <h1>Easy, Fast, Secure Payment in one app </h1>
                      <p>From spending on daily needs to saving for the future, Settl helps you move and manage your money without stress.  </p>
                      <button onClick={this.toggle}>Get Early Update</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hero_img">
                    <img src="images/settl.svg" alt="settl"/>
                    </div> 
                </div>
            </div>
        </div>
      </ScrollAnimation>
   
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

export default HeroSection
