
import React from 'react';
import HomeBanner from '../components/HomeBanner.jsx';
import MenuSectionPreview from '../components/MenuSectionPreview.jsx';
import ComboSection from '../components/ComboSection.jsx'; // Import ComboSection
import AboutUsSection from '../components/AboutUsSection.jsx'; // Import AboutUsSection
// import RateUsSection from '../components/RateUsSection.jsx'; // For later
// import ReservationForm from '../components/ReservationForm.jsx'; // For later

const HomePage = () => {
  return (
    <div className="bg-background">
      <HomeBanner />
      <MenuSectionPreview />
      <ComboSection /> {/* Add ComboSection here */}
      <AboutUsSection /> {/* Add AboutUsSection here */}
      {/* Future sections will be added here */}
      {/* <RateUsSection /> */}
      {/* <ReservationForm /> */}
    </div>
  );
};

export default HomePage;
