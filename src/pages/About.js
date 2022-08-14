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
        <meta charSet="utf-8" />
        <title>Paving + || About-us</title>
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
