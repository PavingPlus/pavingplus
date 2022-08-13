import React from 'react'

export default function Silder() {
    return (
        <>
            {/* Featured Slider One Start */}
            <section className="featured-slider-one" style={{ background: 'grey' }}>
                <div className="containe">
                    <div className="ro f-slider-one owl-carousel">
                        <div className="f-slider-layer">
                            <img src="assets/images/f-slider-one-1.jpg" alt="Slider 1" />
                            <div className="f-slider-one-data">
                                <h1>Create the Building You Want Here</h1>
                                <p>
                                    Busico is a construction and architecture environmentally most
                                    responsible for any kinds of themes.
                                </p>
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal" className="theme-btn">Start Consulting<i className="fas fa-angle-double-right" /></a>
                            </div>
                        </div>
                        <div className="f-slider-layer">
                            <img src="assets/images/project-img-1.jpg" alt="Project Img" />
                            <div className="f-slider-one-data">
                                <h1>A Better Way To Build Your Dreams</h1>
                                <p>
                                    Busico is a construction and architecture environmentally most
                                    responsible for any kinds of themes.
                                </p>
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal1" className="theme-btn">Estimate Price <i className="fas fa-angle-right" /></a>
                            </div>
                        </div>
                        <div className="f-slider-layer">
                            <img src="assets/images/project-img-2.jpg" alt="Project Img 2" />
                            <div className="f-slider-one-data">
                                <h1>Build Innovative &amp; Industrial Solutions</h1>
                                <p>
                                    Busico is a construction and architecture environmentally most
                                    responsible for any kinds of themes.
                                </p>
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal" className="theme-btn">Start Consulting <i className="fas fa-angle-double-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Slider One End */}
        </>
    )
}
