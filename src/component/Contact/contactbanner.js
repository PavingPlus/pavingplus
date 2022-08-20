import React from 'react'

export default function contactbanner() {
    return (
        <div>
            {/* Banner Style One Start */}
            <section className="banner-style-one">
                <div className="parallax" style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }} />
                <div className="container">
                    <div className="row">
                        <div className="banner-details">
                            <h2>Contact Us</h2>
                            {/* <p>our values and vaulted us to the top of our industry.</p> */}
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
                                    <p>Contact Us</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Style One End */}

        </div>
    )
}
