import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const CoreServices = () => {
    return (
        <div className="view">
        <div id="page1_spacing" className="container-fluid">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                    <div className="text-center core_services">
                        <center><img src="images/checkerIcon.svg" alt="checker icon"/></center>
                            <h1>Our Core Services</h1>
                            <p className="">
                            Welcome to a better kind of mobile banking experience. Send, 
                            request and manage your money in one easy to use mobile app
                            </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation  animateIn="fadeInUp" animateOnce={true} delay={100}>
                <div className="row row_top2">
                    <div className="col-md-6">
                        <div className="fast_trans">
                             <img className="" src="images/primarywallet.svg" alt="primary wallet"/>
                        </div>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <div className="social_friend">
                                <img src="images/social.svg" alt="social friend"/>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-6">
                        <div className="core_services_heading">
                            <button>FAST TRANSACTIONS</button>
                            <h1>Send & Request money easily</h1>
                            <p>Send and receive money from your friends in seconds. Choose from your contact list, specify the amount and voila!  Send and receive money from your friends in seconds. Choose from your contact list, specify the amount and voila! </p>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </div>

    )
}

export default CoreServices
