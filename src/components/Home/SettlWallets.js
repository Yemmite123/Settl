import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SettlWallets = () => {
    return (
        <div className="view">
            <div id="page1_spacing" className="container-fluid">
            <ScrollAnimation  animateIn="fadeInUp" animateOnce={true} delay={100}>
                <div className="row row_top2 mobile_row">
                    <div className="col-md-6">
                        <div className="fast_trans">
                         <img src="images/Wallets page.svg" alt="primary wallet"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="settl_wallets">
                            <div className="core_services_DST core_services_mobile">
                                <img src="images/Sterling pro.svg" alt="SETTL WALLETS"/>  <p>SETTL WALLETS</p>
                            </div>
                            <h1>Store your money with convenience</h1>
                            <p>Choose a Settl wallet and store your money with convenience. Monitor in-bound and out-bound transactions with your primary wallet. Also, manage your finances better and save for different purposes with savings and custom wallets.  </p>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default SettlWallets
