import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SettlWallets = () => {
    return (
        <div className="view">
            <div id="page1_spacing" className="container-fluid">
            <ScrollAnimation  animateIn="fadeInUp" animateOnce={true} delay={100}>
                <div className="row row_top2">
                    <div className="col-md-6">
                        <div className="fast_trans">
                         <img src="images/Wallets page.svg" alt="primary wallet"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="settl_wallets">
                            <button>SETTL WALLETS</button>
                            <h1>Store your money with convenience</h1>
                            <p>Our physical debit cards give you access to cash withdrawals anywhere. And with our secure virtual cards, you can pay for products on your favourite online stores, in dollars.</p>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default SettlWallets
