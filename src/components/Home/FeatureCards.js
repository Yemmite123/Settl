import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const FeatureCards = () => {
    return (
        <div>
            <div className="view" id="everything_section">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                    <div id="page1_spacing" className="container-fluid">
                        <div className="row row_top2">  
                            <div className="col-md-12">
                            <div className="text-center card_heading">
                                <h1>We’re making sure everything is in place</h1>
                                <p>Welcome to a better kind of mobile banking experience.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            <div id="container_top" className="container">
                <div  className="row">
                    <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <div className="card card_adjustment" id="card_dis">
                            <div className="card-body card_content">
                                <img className="" src="images/featureIcon1.svg" alt="featureIcon1"/>
                                <h4 className="card-title">User friendly Interface</h4>
                                <p className="card-text">Your deposits are protected by the Nigerian Deposit Insurance Corporation.</p>
                            </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={250}>
                            <div className="card card_adjustment" id="card_dis">
                            <div className="card-body card_content">
                                <img className="" src="images/featureIcon2.svg" alt="featureIcon2"/>
                                <h4 className="card-title">Security</h4>
                                <p className="card-text">PCI-certified, auditor certified, PCI Service Provider Level 1 - the highest certification level</p>
                            </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                            <div className="card card_adjustment" id="card_dis">
                            <div className="card-body card_content">
                                <img className="" src="images/featureIcon3.svg" alt="featureIcon3"/>
                                <h4 className="card-title">Complete Eco-systeme</h4>
                                <p className="card-text card_para">PCI-certified, auditor certified, PCI Service Provider Level 1 - the highest certification level</p>
                            </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCards
