import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Navbar from '../common/Navbar'
import TrustedPartnerSection from '../components/TrustedPartnerSection'
import PartnerNotProviderSection from '../components/PartnerNotProviderSection'

function HomePage() {
   useEffect(() =>{
     window.scrollTo({
      top: 0,
      behavior: "smooth"
     })
  })
  return (
    <div>
      <Navbar isTransparent={true} />
      <Hero />
      <TrustedPartnerSection />
      <PartnerNotProviderSection />
      {/* Add more sections as needed */}
    </div>
  )
}

export default HomePage