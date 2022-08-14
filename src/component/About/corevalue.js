import React from 'react'

export default function corevalue() {
    return (
        <div>
            {/* Core Values Start */}
            <section className="gap no-top core-values">
                <div className="heading">
                    <figure>
                        <img src="assets/images/heading-icon.png" alt="Heading Icon" />
                    </figure>
                    <span>MAKE A DIFFERENCE</span>
                    <h2>Our Core Values</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <ul>
                            <li>
                                <div className="data">
                                    <h3>Integrity</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="image">
                                    <figure>
                                        <img className="w-100" src="assets/images/c-v-img-1.jpg" alt="Core Values Image 1" />
                                    </figure>
                                </div>
                            </li>
                            <li>
                                <div className="image">
                                    <figure>
                                        <img className="w-100" src="assets/images/c-v-img-1.jpg" alt="Core Values Image 1" />
                                    </figure>
                                </div>
                                <div className="data">
                                    <h3>Responsibility</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet.</p>
                                </div>
                            </li>
                            <li>
                                <div className="data">
                                    <h3>Accountability</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="image">
                                    <figure>
                                        <img className="w-100" src="assets/images/c-v-img-1.jpg" alt="Core Values Image 1" />
                                    </figure>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Core Values End */}
            {/* CTA Section Start */}
            <section className="cta-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="cta-data">
                                <h2>Ready to work together?</h2>
                                <p>You’re looking for a reliable bricks provider or you’re looking to take the next step in your career, we want to hear from you!</p>
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal" className="theme-btn">Build a Project  <i className="fas fa-angle-double-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="cta-data">
                                <figure>
                                    <img src="assets/images/building-2.png" alt="Building-2 Pic" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section End */}
        </div>

    )
}
