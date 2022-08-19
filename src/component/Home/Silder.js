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
                                <h1>Build Innovative & Industrial Solutions </h1>
                                <p>
                                Our objective is to recycle plastics and transform them into sustainable products and construction materials according to today's need .
                                </p>
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal" className="theme-btn">Start Consulting<i className="fas fa-angle-double-right" /></a>
                            </div>
                        </div>
                        <div className="f-slider-layer">
                            <img src="assets/images/project-img-1.jpg" alt="Project Img" />
                            <div className="f-slider-one-data">
                            <h1 >A Better Way To Build Your Dreams</h1>
                                <p>
                                We sell paver blocks, paver tiles, plastic bricks and other products made by recycling plastics.
                                </p>
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal" className="theme-btn">Estimate Price <i className="fas fa-angle-right" /></a>
                            </div>
                        </div>
                        <div className="f-slider-layer">
                            <img src="assets/images/project-img-2.jpg" alt="Project Img 2" />
                            <div className="f-slider-one-data">
                            <h1>Create the Building You Want Here </h1>
                                <p>
                                We take orders as well as undertake government projects. We are a large scale manufacturer of recycled plastic products.
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
