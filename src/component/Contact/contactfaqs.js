import React from 'react'

export default function contactfaqs() {
    return (
            <div>
                {/* Contact Faqs Start */}
                <section className="contact-faqs">
                    <div className="heading">
                        <figure>
                            <img src="assets/images/heading-icon.png" alt="Heading Icon" />
                        </figure>
                        <span>Frequently asked question</span>
                        <h2>Finding Solutions For Your Dream Project</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="acc2">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="heading-Two">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-Two" aria-expanded="false" aria-controls="collapse-Two">
                                                    How to Associate with Team Paving+?
                                                </button>
                                            </h2>
                                            <div id="collapse-Two" className="accordion-collapse collapse" aria-labelledby="heading-Two" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                Oreder our product (Paver Block, Bricks)<br /> Be A Partner (FOCO) <br /> Be A Vendor (Industial Space Plastics)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="heading-One">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-One" aria-expanded="true" aria-controls="collapse-One">
                                                How is the Paving+ better than other construction material available in global maket? Is it expensive?
                                                </button>
                                            </h2>
                                            <div id="collapse-One" className="accordion-collapse collapse show" aria-labelledby="heading-One" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                "Sustainability" "Ecofriendly" "Recyable" "Water Resistant" "Non Toxic" "light Weight". <br />
                                                    No! The Cost Is Lower.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="heading-Three">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-Three" aria-expanded="false" aria-controls="collapse-Three">
                                                How can i place an order at Paving+?
                                                </button>
                                            </h2>
                                            <div id="collapse-Three" className="accordion-collapse collapse" aria-labelledby="heading-Three" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                That Awesome!  Welcome, Greenpreneur<br /> Contact at : - +91 88252 17361, support@paving-plus.com, <br />We'll be happy to adress your query.
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Faqs End */}
                {/* Contact Map Start */}
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.32673915118102!2d88.39565942485703!3d22.53313684020542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276a6b482937d%3A0x506a23432d0a69c7!2sOffbeat%20CCU!5e0!3m2!1sen!2sin!4v1660498904527!5m2!1sen!2sin" width={600} height={760} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                {/* Contact Map End */}
            </div>
    )
}
