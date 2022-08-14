import React from 'react'
import Header from '../layout/header';
import Contactbanner from '../component/Contact/contactbanner';
import Contactform from '../component/Contact/contactform';
import Contactfaqs from '../component/Contact/contactfaqs';
import Footer from '../layout/footer';
import Logo from '../assets/images/Paving-Logo-Black-Home.svg';

export default function Contact() {
    return (
        <div>
            {/* Loader Start */}
            <div className="preloader">
                <figure>
                    <img src={Logo} alt="" />
                </figure>
            </div>
            {/* Loader End */}
            <Header />
            <Contactbanner />
            <Contactform />
            <Contactfaqs />
            <Footer />
        </div>
    )
}
