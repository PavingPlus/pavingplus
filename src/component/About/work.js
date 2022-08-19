import React from 'react'

export default function work() {
    return (
        <div>
            {/*About How It Works Start */}
            <section className="gap about-how-it-works light-bg-color">
                <div className="heading">
                    <figure>
                        <img src="assets/images/heading-icon.png" alt="Heading Icon" />
                    </figure>
                    <span>Plan + Control</span>
                    <h2>How We Works</h2>
                </div>
                <div className="container">
                    <figure style={{ position: 'relative', zIndex: 9 }}>
                        <img className="w-100" src="assets/images/about-h-i-w.jpg" alt="About How It Works" />
                    </figure>
                </div>
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6 col-md-4 col-sm-6">
                            <div className="plans">
                                <div className="y-box d-flex-all">
                                    1.
                                </div>
                                <h3>Non- Heating Process</h3>
                                <p>In the Non-heating process, unsegregated waste plastic is upcycled with other
                                    raw materials to make Alternate construction materials. More than 30% of
                                    waste plastics are upcycled in this process.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-6">
                            <div className="plans">
                                <div className="y-box d-flex-all">
                                    2.
                                </div>
                                <h3>Heating Process (Patented)</h3>
                                <p>In Heating Process, Unsegregated waste plastics are recycled and converted
                                    into Alternate Construction Materials. More than 90% of waste plastics
                                    constitute the product and 10% other materials.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*About How It Works End */}
            {/*About Key Benefits Start */}
            <section className="gap about-key-benefits">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="data">
                                <figure>
                                    <img className="w-100" src="assets/images/about-k-b.jpg" alt="About key Benefits" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="data">
                                <h2>Key Benefits</h2>
                                <ul>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        <p>We transform the plastic which contributes to degrade our environment into useful construction materials. </p>
                                    </li>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        <p>We are eliminating the hazardous brick making industries into a more channelised and organised firms with new solutions and machine oriented works.</p>
                                    </li>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        <p>We are 100% made by recycling the waste material to consume huge amount of municipal and industrial waste with zero residue and low carbon emission.</p>
                                    </li>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        <p>We also emphasis on fashionable and durable products for our consumers</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Key Benefits End --
    </div>
*/}</div>

    )
}
