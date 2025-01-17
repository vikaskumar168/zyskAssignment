import React from "react";
import Header from "./Components/Header";
import Social from "./Components/Social";
import Feature from "./Components/Feature";
import Testimonial from "./Components/Testimonial";
import Faq from "./Components/Faq";
import Blog from "./Components/Blog";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import SectionDivider from "./Components/SectionDivider";

const App = () => {
  return (
    <div>
      <Header />
      <SectionDivider />
      <Social />
      <SectionDivider />
      <Feature />
      <Testimonial />
      <SectionDivider />
      <Faq />
      <SectionDivider />
      <Blog />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
