import React from 'react'
import { Helmet } from 'react-helmet';
import Header from '../layout/header';
import Banner from '../component/About/banner';
import Start from '../component/About/start';
import Works from '../component/About/work';
import CoreValue from '../component/About/corevalue';
import Footer from '../layout/footer';
import Logo from '../assets/images/Paving-Logo-Black-Home.svg';

export default function About() {
  return (
    <>
      <Helmet>
        <title> Paving+ || About-us</title>
        <meta name="title" content=" Paving+ || About-us" />
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
      </Helmet>
      {/* Loader Start */}
      <div className="preloader">
        <figure>
          <img src={Logo} alt="" />
        </figure>
      </div>
      {/* Loader End */}
      <Header />
      <Banner />
      <Start />
      <Works />
      <CoreValue />
      <Footer />
    </>
  )
}
