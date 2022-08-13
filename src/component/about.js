import React from 'react'

export default function about() {
    return (
        <div>
            {/* About Style One Start */}
            <section className="gap no-top about-style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-data-left">
                                <figure>
                                    <img src="assets/images/about-one.png" alt="About One" />
                                </figure>
                                <figure className="about-image">
                                    <img src="assets/images/about-two.png" alt="About Two" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-data-right">
                                <span>Welcome to Our Company</span>
                                <h2>Constro Provides a full range of services</h2>
                                <div className="about-info">
                                    <p>
                                        We successfully cope with tasks of varying complexity, provide
                                        long-term guarantees and regularly master new technologies.
                                        Our portfolio includes dozens of successfully completed
                                        projects of houses of different storeys, with high–quality
                                        finishes and good repairs. Building houses is our vocation!
                                    </p>
                                    <figure>
                                        <img src="assets/images/signature.png" alt="Signature" />
                                    </figure>
                                    <h3>Walimes Jonnie</h3>
                                    <h4>Director of Constro Company</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Style One End */}
            {/* Counter Style One Start */}
            <section className="gap no-top counter-style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="counter-data">
                                <div className="count">
                                    <span className="counter">10</span>+<i>Years</i>
                                </div>
                                <h4>Professional Experience</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="counter-data upper-space">
                                <div className="count">
                                    <span className="counter">300</span><i>People</i>
                                </div>
                                <h4>Employees in current team</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="counter-data">
                                <div className="count">
                                    <span className="counter">21</span>+<i>Locations</i>
                                </div>
                                <h4>Sites in current development</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Counter Style One End */}
        </div>

    )
}
