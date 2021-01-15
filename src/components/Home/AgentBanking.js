import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AgentBanking = () => {
    return (
        <div className="view" id="agent_banking_section">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                <div id="page1_spacing" className="container-fluid">
                    <div className="row row_top2">  
                        <div className="col-md-6">
                            <div className="agent_banking">
                                <div className="core_services_DST core_services_mobile">
                                   <img src="images/Sterling pro.svg" alt="AGENT BANKING"/>  <p>AGENT BANKING</p>
                                </div>
                                <h1>Affordable banking in your neighbourhood</h1>
                                <p>Join Settl’s affordable financial inclusion service and become the bank in your neighbourhood. Earn money every time you help customers to pay bills, load airtime and withdraw and deposit money.   </p>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="agent_banking_img">
                                <img className="img-fluid" src="images/banking.png" alt="banking"/>
                                <div className="agent_banking_mobile_img">
                                <img className="img-fluid" src="images/Agent photo.png" alt="banking"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default AgentBanking
