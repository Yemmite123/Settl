import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SettlCard = () => {
    return (
        <div className="view">
            <div id="page1_spacing" className="container-fluid">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                    <div className="row row_top2">
                        <div className="col-md-6">
                            <div className="settl_card">
                            <div className="core_services_DST core_services_mobile">
                               <img src="images/Sterling pro.svg" alt="Sterling"/>  <p>DEBIT CARDS</p>
                            </div>
                                <h1>Go virtual or physical. </h1>
                                <p>Don’t leave every payment or transaction opportunity untouched, whether physical or virtual. Settl secure debit cards let you withdraw your money, anytime, anywhere. You can pay bills and purchase products from your favourite online stores in Naira and Dollars. </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hand_card">
                                <img src="images/card-removebg-preview.svg" alt="primary wallet"/>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
  
  
    )
}

export default SettlCard
