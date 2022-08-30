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
import Popup from '../layout/popup';
import Logo from '../assets/images/Paving-Logo-Black-Home.svg';

export default function Home() {
    return (
        <>
            <Helmet>
                     
            <meta charSet="utf-8" />
            {/* Primary Meta Tags */} 
            <title> Paving+ || Building Green Construction Solutions</title>
            <meta name="title" content=" Paving+ || Building Green Construction Solutions" />
            <meta name="description" content="Paving+ uses eco-friendly and sustainable technology to create damp-proof and lightweight bricks and paver blocks. Paving + products are entirely composed of recycled plastic trash and industrial waste." />
            {/* Open Graph / Facebook */} 
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://paving-plus.com/" />
            <meta property="og:title" content=" Paving+ || Building Green Construction Solutions" />
            <meta property="og:description" content="Paving+ uses eco-friendly and sustainable technology to create damp-proof and lightweight bricks and paver blocks. Paving + products are entirely composed of recycled plastic trash and industrial waste." />
            <meta property="og:image" content="../assets/images/meta.png" />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://paving-plus.com/" />
            <meta property="twitter:title" content=" Paving+ || Building Green Construction Solutions" />
            <meta property="twitter:description" content="Paving+ uses eco-friendly and sustainable technology to create damp-proof and lightweight bricks and paver blocks. Paving + products are entirely composed of recycled plastic trash and industrial waste." />
            <meta property="twitter:image" content="../assets/images/meta.png" />
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
            <Popup/>

        </>
    )
}
