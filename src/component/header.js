import React from 'react'

export default function header() {
    return (
        <>
            {/* Header Style One Start */}
            <header className="header-style-one">
                <div className="container">
                    <div className="row">
                        <div className="desktop-nav" id="stickyHeader">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="d-flex-all justify-content-between">
                                            <div className="header-logo">
                                                <a href="index.html">
                                                    <figure>
                                                        <img src="assets/images/Paving-Logo.svg" alt="logoo" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="nav-bar">
                                                <ul>
                                                    <li>
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">About us</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Service</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Contact</a>
                                                    </li>
                                                </ul>
                                                <div className="extras">
                                                    <a href="javascript:void(0)" id="mobile-menu" className="menu-start">
                                                        <svg id="ham-menu" viewBox="0 0 100 100">
                                                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                                            <path className="line line2" d="M 20,50 H 80" />
                                                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                                        </svg>
                                                    </a>
                                                    <a href="javascript:void(0)" id="desktop-menu" className="menu-start">
                                                        <svg id="ham-menue" viewBox="0 0 100 100">
                                                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                                            <path className="line line2" d="M 20,50 H 80" />
                                                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                                        </svg>
                                                    </a>
                                                    <a href="tel:+918825217361" className="theme-btn">+91 88252 17361
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={40} height={62} viewBox="0 0 40 62">
                                                                <defs>
                                                                    <clipPath id="saddasdasdasdasda">
                                                                        <rect width={40} height={62} />
                                                                    </clipPath>
                                                                </defs>
                                                                <g id="Mobisdfle" clipPath="url(#saddasdasdasdasda)">
                                                                    <path id="Path_125" data-name="Path 1" d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z" transform="translate(1 1)" />
                                                                    <path id="Path_4342" data-name="Path 2" d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z" transform="translate(14 48)" />
                                                                </g>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-nav" id="mobile-nav">
                            <div className="res-log">
                                <a href="index.html">
                                    <img src="assets/images/Paving-Logo.svg" alt="Responsive Logo" />
                                </a>
                            </div>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">About us</a>
                                </li>
                                <li>
                                    <a href="/">Team</a>
                                </li>
                                <li>
                                    <a href="/">Service</a>
                                </li>
                                <li>
                                    <a href="/">Contact</a>
                                </li>

                            </ul>
                            <a href="JavaScript:void(0)" id="res-cross" />
                        </div>
                        <div className="mobile-nav desktop-menu">
                            <h2>lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                            <p className="des">
                            lorem ipsum dolor sit amet, consectetur adipisicing , sed do eiusmod tempor incididunt ut labore
                            lorem ipsum dolor sit amet, consectetur adipisicing
                            </p>
                            <figure>
                                <img src="assets/images/desktop-menu-img.jpg" alt="Desktop Menu Image" />
                            </figure>
                            <h3>Get in touch</h3>
                            <p className="num"> +91 88252 17361</p>
                            <p className="adrs">
                            36/F, Topsia Road, Offbeat CCU, 4th Floor, Room - 405, Kol - 39
                            </p>
                            <div className="social-medias">
                                <a href="javascript:void(0)">Facebook</a>
                                <a href="javascript:void(0)">Twitter</a>
                                <a href="javascript:void(0)">Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header Style One End */}
        </>
    )
}
