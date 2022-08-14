import React from 'react'
import Header from '../layout/header';
import TeamBanner from '../component/Team/teambanner';
import TeamProfile from '../component/Team/teamprofile';
import Footer from '../layout/footer';
import Logo from '../assets/images/Paving-Logo-Black-Home.svg';

export default function Team() {
  return (
    <>
      {/* Loader Start */}
      <div className="preloader">
        <figure>
          <img src={Logo} alt="" />
        </figure>
      </div>
      {/* Loader End */}
      <Header />
      <TeamBanner />
      <TeamProfile />
      <Footer />
    </>
  )
}
