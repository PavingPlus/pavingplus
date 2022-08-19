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
                                <h2>Paving+ provides a full range of plastic bricks etc.</h2>
                                <div className="about-info">
                                    <p>
                                    Paving +, A Kolkata based startup, formed in 2018, by Ranjan Kumar Gupata and Sheikh Ziaur Rahaman aims to provide innovative and sustainable solutions to the global waste pandemic by manufacturing products from plastic waste and industrial waste.
We covered a long way with 6+ research papers published and transforming an initial idea into a business intended to cross 20 million.We have also set a benchmark by fostering a long-term relationship in flagship Government projects.
                                    </p>
                                    <figure>
                                        <img src="assets/images/signature.png" alt="Signature" />
                                    </figure>
                                    <h3>Ranjan Kumar Gupta</h3>
                                    <h4>Founder and CEO</h4>
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
                                    <span className="counter">50</span><i>People</i>
                                </div>
                                <h4>Employees in current team</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="counter-data">
                                <div className="count">
                                    <span className="counter">10</span>+<i>Locations</i>
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
