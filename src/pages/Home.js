import React from 'react';
import Header from "../component/header";
import Silder from '../component/Silder';
import Services from '../component/service';
import About from '../component/about';
import Project from '../component/project';
import Team from '../component/team';
import Client from '../component/client';
import Footer from '../component/footer';

import Logo from '../assets/images/Paving-Logo-Black-Home.svg';

export default function Home() {
    return (
        <>
            {/* Loader Start */}
            <div className="preloader">
                <figure>
                    <img src={Logo} alt=""/>
                </figure>
            </div>
            {/* Loader End */}
            <Header />
            <Silder />
            <Services />
            <About />
            <Project />
            <Team />
            <Client />
            <Footer />

        </>
    )
}
