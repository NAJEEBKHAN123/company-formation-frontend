
import React from 'react';
import Services from '../components/services/Services';
import Navbar from '../common/Navbar';

const ServicesPage = () => {
  return (
    <div>
      <Navbar isTransparent={false}/>
      <Services />  {/* This renders ALL your service components */}
    </div>
  );
};

export default ServicesPage;