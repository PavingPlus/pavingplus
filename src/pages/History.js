import React from 'react'
import { Helmet } from 'react-helmet';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Logo from '../assets/images/Paving-Logo-Black-Home.svg';

export default function History() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Paving + || History</title>
            </Helmet>
            {/* Loader Start */}
            <div className="preloader">
                <figure>
                    <img src={Logo} alt="" />
                </figure>
            </div>
            {/* Loader End */}
            <Header />
            <div>
                {/* Banner Style One Start */}
                <section className="banner-style-one">
                    <div className="parallax" style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }} />
                    <div className="container">
                        <div className="row">
                            <div className="banner-details">
                                <h2>History</h2>
                                <p>our values and vaulted us to the top of our industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrums">
                        <div className="container">
                            <div className="row">
                                <ul>
                                    <li>
                                        <a href="/">
                                            <i class="fas fa-home"></i>
                                            <p>Home</p>
                                        </a>
                                    </li>
                                    <li className="current">
                                        <p>History</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Banner Style One End */}
                {/* History Start */}
                <section className="gap history detail-page">
                    <div className="heading">
                        <span>COMPANY History</span>
                        <h2>A strong foundation</h2>
                    </div>
                    <div className="container spacee">
                        <div className="timeline" id="timeline">
                            <div className="fill" style={{ height: 20 }}>
                            </div>
                        </div>
                        <div className="row left first">
                            <div className="col-lg-5">
                                <div className="h-box">
                                    <figure>
                                        <img src="assets/images/history-img-1.jpg" alt="History Image One" />
                                    </figure>
                                    <h2>1982</h2>
                                    <p><span>Thomas Willimes starts the company,</span> managing construction of our first office building in Chelsea, Mass.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row right">
                            <div className="col-lg-5 offset-lg-7">
                                <div className="h-box">
                                    <figure>
                                        <img src="assets/images/history-img-2.jpg" alt="History Image Two" />
                                    </figure>
                                    <h2>1994</h2>
                                    <p>Our company embraces snowbird status and expands to West Palm Beach—our first office outside New England.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row full">
                            <div className="col-lg-12">
                                <div className="h-box">
                                    <figure>
                                        <img src="assets/images/history-img-6.jpg" alt="History Image Six" />
                                    </figure>
                                    <h2>2004</h2>
                                    <p>The Career Start program officially launches, recruiting college graduates into robust construction training rotations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row right">
                            <div className="col-lg-5 offset-lg-7">
                                <div className="h-box">
                                    <figure>
                                        <img src="assets/images/history-img-3.jpg" alt="History Image Three" />
                                    </figure>
                                    <h2>2010</h2>
                                    <p>Certified firms to learn our approach, make connections, and grow their businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row left">
                            <div className="col-lg-5">
                                <div className="h-box">
                                    <figure>
                                        <img src="assets/images/history-img-4.jpg" alt="History Image Four" />
                                    </figure>
                                    <h2>2017</h2>
                                    <p>starts Safer Together, our safety program that emphasizes people and teamwork.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row right">
                            <div className="col-lg-5 offset-lg-7">
                                <div className="h-box">
                                    <figure>
                                        <img src="assets/images/history-img-5.jpg" alt="History Image Five" />
                                    </figure>
                                    <h2>2021</h2>
                                    <p>highly collaborative design-build process that is revolutionizing the real estate development lifecycle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* History End */}
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
            <Footer />
        </>
    )
}
