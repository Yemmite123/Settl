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
                                <h1>Smooth and safe transactions in a single app</h1>
                                <p>Everything you need for smooth, safe and secure banking at your fingertips. Be your own financial manager with the assistance of a PCI-certified mobile banking app. </p>
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
                                <p className="card-text">Request. Save. Send. Manage your money without hassle through an easy-to-use mobile app. </p>
                            </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={250}>
                            <div className="card card_adjustment" id="card_dis">
                            <div className="card-body card_content">
                                <img className="" src="images/featureIcon2.svg" alt="featureIcon2"/>
                                <h4 className="card-title">Safe and secure </h4>
                                <p className="card-text">Be assured of more than ease with every transaction. Settl is PCI-certified, and the NDIC secures deposits to your Settl wallets. </p>
                            </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-4">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={350}>
                            <div className="card card_adjustment" id="card_dis">
                            <div className="card-body card_content">
                                <img className="" src="images/featureIcon3.svg" alt="featureIcon3"/>
                                <h4 className="card-title">Complete eco-system</h4>
                                <p className="card-text card_para">Manage your money, transact online and physically in different currencies, anytime and anywhere. </p>
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
