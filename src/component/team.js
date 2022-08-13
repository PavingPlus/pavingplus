import React from 'react'

export default function team() {
    return (
        <div>
           {/* Client Style One Start */}
           <div className="gap client-style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client-slider owl-carousel">
                                <img className="w-auto m-auto" src="assets/images/client-1.png" alt="client-1" />
                                <img className="w-auto m-auto" src="assets/images/client-2.png" alt="client-2" />
                                <img className="w-auto m-auto" src="assets/images/client-3.png" alt="client-3" />
                                <img className="w-auto m-auto" src="assets/images/client-4.png" alt="client-4" />
                                <img className="w-auto m-auto" src="assets/images/client-5.png" alt="client-5" />
                                <img className="w-auto m-auto" src="assets/images/client-1.png" alt="client-1" />
                                <img className="w-auto m-auto" src="assets/images/client-2.png" alt="client-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Client Style One End */}
            {/* Core Features Start */}
            <section className="core-features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="space">
                                <div className="heading-style-2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="data">
                                                    <span>Core Features</span>
                                                    <h2>What Makes Us Differnt</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span className="num">01.</span> Early Engagement
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Early engagement reduces project uncertainties through
                                                    comprehensi scope definition and systems optimisation.
                                                    The earlier you bring DES on board for your project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span className="num">02.</span> Integrity
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Early engagement reduces project uncertainties through
                                                    comprehensi scope definition and systems optimisation.
                                                    The earlier you bring DES on board for your project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <span className="num">03.</span> Solutions
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Early engagement reduces project uncertainties through
                                                    comprehensi scope definition and systems optimisation.
                                                    The earlier you bring DES on board for your project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <span className="num">04.</span> Innovation
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Early engagement reduces project uncertainties through
                                                comprehensi scope definition and systems optimisation. The
                                                earlier you bring DES on board for your project.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shape">
                                <div className="video">
                                    <figure>
                                        <img src="assets/images/core-feature.jpg" alt="Core Feature Img" />
                                    </figure>
                                    <a className="video-play-btn" data-fancybox href="https://www.youtube.com/watch?v=uemObN8_dcw">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={35} height={56} viewBox="0 0 35 56">
                                            <defs>
                                                <clipPath id="clip-video_arrow">
                                                    <rect width={35} height={56} />
                                                </clipPath>
                                            </defs>
                                            <g id="video_arrow" data-name="video arrow" clipPath="url(#clip-video_arrow)">
                                                <path id="Shape_1" data-name="Shape 1" d="M1362,5000.8,1327,4972V5027Z" transform="translate(-1326.998 -4971.996)" fill="rgba(0,0,0,0)" />
                                                <path id="Shape_1_-_Outline" data-name="Shape 1 - Outline" d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z" transform="translate(-1326.998 -4971.996)" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Core Features End */}
        </div>

    )
}
