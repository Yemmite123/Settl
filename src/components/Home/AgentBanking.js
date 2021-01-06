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
                                <button>AGENT BANKING</button>
                                <h1>Affordable banking in your neighbourhood</h1>
                                <p>Send and receive money from your friends in seconds. Choose from your contact list, specify the amount and voila!  Send and receive money from your friends in seconds. Choose from your contact list, specify the amount and voila! </p>
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
