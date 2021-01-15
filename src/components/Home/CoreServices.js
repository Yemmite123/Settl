import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const CoreServices = () => {
    return (
        <div className="view">
        <div id="page1_spacing" className="container-fluid">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                    <div className="text-center core_services">
                        <center><img src="images/checkerIcon.svg" alt="checker icon"/></center>
                            <h1>Mobile banking created for convenience</h1>
                            <p className="">
                            Ditch the old, stressful system of mobile banking. Settl is designed for your convenience. Manage your money properly with the Settl app. 
                            </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation  animateIn="fadeInUp" animateOnce={true} delay={100}>
                <div className="row row_top2 mobile_row">
                    <div className="col-md-6">
                        <div className="fast_trans">
                             <img className="" src="images/primarywallet.svg" alt="primary wallet"/>
                        </div>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            {/* <div className="social_friend">
                                <img src="images/social.svg" alt="social friend"/>
                            </div> */}
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-6">
                        <div className="core_services_heading">
                            <div className="core_services_DST core_services_mobile">
                             <img src="images/Sterling pro.svg" alt="FAST TRANSACTIONS"/>  <p>FAST TRANSACTIONS</p>
                            </div>
                          
                            <h1>Send & Request money easily </h1>
                            <p>Settl for swift transactions, nothing else. Send and receive money from friends, family members, customers, and business partners within seconds. Just choose your contact, specify the amount, and send.     </p>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </div>

    )
}

export default CoreServices
