
import React from 'react';
import HomeBanner from '../components/HomeBanner.jsx';
import MenuSectionPreview from '../components/MenuSectionPreview.jsx';
// import AboutUsSection from '../components/AboutUsSection.jsx'; // For later
// import RateUsSection from '../components/RateUsSection.jsx'; // For later
// import ReservationForm from '../components/ReservationForm.jsx'; // For later

const HomePage = () => {
  return (
    <div className="bg-background">
      <HomeBanner />
      <MenuSectionPreview />
      {/* Future sections will be added here */}
      {/* <AboutUsSection /> */}
      {/* <RateUsSection /> */}
      {/* <ReservationForm /> */}
    </div>
  );
};

export default HomePage;
