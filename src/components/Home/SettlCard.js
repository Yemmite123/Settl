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
                                <button>SETTL CARDS</button>
                                <h1>Virtual or Physical? Choose one. Or both.</h1>
                                <p>Our physical debit cards give you access to cash withdrawals anywhere. And with our secure virtual cards, you can pay for products on your favourite online stores, in dollars.</p>
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
