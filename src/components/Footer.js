import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {
    return (
        <div className="view">
            <div id="page_heaght" className="container-fluid footer_hgt">
                <div className="row footer_top">  
                    <div className="col-md-12">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                            <div className="text-center footer_section">
                                <p>©2020 Settl.</p>
                                <p>All product names, logos, and brands are property of their respective owners.</p>
                                <p>All company, product and service names used in this website are for identification purposes only.</p>
                                <p>Use of these names, logos, and brands does not imply endorsement</p>
                                <ul>
                                <li><img src="images/facebook.svg" alt="social handles"/></li>
                                <li><img src="images/twitter.svg" alt="social handles"/></li>
                                <li><img src="images/instagram.svg" alt="social handles"/></li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
