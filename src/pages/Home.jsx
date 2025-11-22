import React from "react";
import ResponsiveNav from "./components/ResponsiveNav.tsx";
import Hero from "./components/Hero.jsx";
import About1 from "./components/About1.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.tsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.tsx";
// import ProfileCard from "./Dashboard/Rules/ProfileCard";

const Home = () => {
  return (
    <div>
      <ResponsiveNav />
      <Hero />
      <About1 />
      <About />
      <Testimonials />
      <ContactUs />
      <Footer />
      {/* <ProfileCard /> */}
    </div>
  );
};

export default Home;
