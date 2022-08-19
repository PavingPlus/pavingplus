import React from 'react'

export default function start() {
    return (
        <div>  {/* About-First Start */}
            <section className="gap about-first">
                <div className="container">
                    <div className="row">

                        <h2>Paving+ has emerged as an idea to upcycle plastic in a sustainable fashion.</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="who-we-are">
                                <div>
                                    <h3>Who We Are?</h3>
                                    <p>By creating products out of plastic waste and industrial waste, Paving +, a startup with roots in Kolkata and founded in 2018 by Ranjan Kumar Gupata and Sheikh Ziaur Rahaman, aims to provide creative and sustainable solutions to the global waste pandemic. Milk pouches, PET bottles, and other plastic waste are used in the production of goods like bricks, paver blocks, tiles, planters, benches, kerbstones, and many more. We covered a long way with 6+ research papers published and transforming an initial idea into a business intended to cross 20 million.We have also set a benchmark by fostering a long-term relationship in flagship Government projects .</p>
                                </div>
                                <figure>
                                    <img className="w-100" src="assets/images/about-d-1.jpg" alt="About Image One" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="who-we-are space">
                                <div>
                                    <h3>What's in it for me?</h3>
                                    <ul>
                                        <li><i class="far fa-dot-circle"></i> High performing, low carbon concrete solution</li>
                                        <li><i class="far fa-dot-circle"></i> Value for workers' skills</li>
                                        <li><i class="far fa-dot-circle"></i> Excellent standards in construction</li>
                                        <li><i class="far fa-dot-circle"></i> An inclusive industry</li>
                                        <li><i class="far fa-dot-circle"></i> Don't take our word for it</li>
                                    </ul>
                                </div>
                                <figure>
                                    <img className="w-100" src="assets/images/about-d-2.jpg" alt="About Image Two " />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About-First End */}
            {/* Counter Style One Start */}
            <section className="gap no-top counter-style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="counter-data">
                                <div className="count">
                                    <span className="counter">10</span>+<i>Years</i>
                                </div>
                                <h4>Professional Experience</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="counter-data upper-space">
                                <div className="count">
                                    <span className="counter">50</span><i>People</i>
                                </div>
                                <h4>Employees in current team</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
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
