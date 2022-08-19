import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../layout/header";
import Silder from '../component/Home/Silder';
import Services from '../component/Home/service';
import About from '../component/Home/about';
import Project from '../component/Home/project';
import Team from '../component/Home/team';
import Client from '../component/Home/client';
import Footer from '../layout/footer';

import Logo from '../assets/images/Paving-Logo-Black-Home.svg';

export default function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Paving +</title>
            </Helmet>
            {/* Loader Start */}
            <div className="preloader">
                <figure>
                    <img src={Logo} alt="" />
                </figure>
            </div>
            {/* Loader End */}
            <Header />
            <Silder />
            <Services />
            <About />
            <Project />
            <Team />
  
            <Footer />

        </>
    )
}
