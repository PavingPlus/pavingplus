import React from 'react'

export default function service() {
    return (
            <div>
                {/* Service Style One Start */}
                <section className="gap service-style-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                                <div className="service-data">
                                    <div className="svg-icon d-flex-all">
                                        <img src="assets/images/icon-1.svg" alt="Icon" />
                                    </div>
                                    <h3><a href="/">Recyclable </a></h3>
                                    <p>
                                    Paving+ is recyclable, so even after tearing down your building, we can reuse the demolition trash to make new, reusable bricks, decreasing the amount of debris left over.
                                    </p>
                                    <a className="icon" href="/">
                                        <i className="fas fa-angle-double-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                                <div className="service-data">
                                    <div className="svg-icon d-flex-all">
                                        <img src="assets/images/icon-2.svg" alt="Icon 2" />
                                    </div>
                                    <h3><a href="/">Low cost</a></h3>
                                    <p>
                                    Paving+ saves you money on waterproofing and wall structure repairs while lowering the overall cost of construction by up to 20%.
                                    </p>
                                    <a className="icon" href="/">
                                        <i className="fas fa-angle-double-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                                <div className="service-data">
                                    <div className="svg-icon d-flex-all">
                                        <img src="assets/images/icon-3.svg" alt="Icon 3" />
                                    </div>
                                    <h3><a href="/">Non-Toxic</a></h3>
                                    <p>
                                    The Paving+ technology was created to provide our partners and stakeholders a clean, safe, and secure working environment as well as sustainable solutions.
                                    </p>
                                    <a className="icon" href="/">
                                        <i className="fas fa-angle-double-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Service Style Two End */}
            </div>
    )
}
