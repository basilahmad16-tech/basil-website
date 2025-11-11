import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="home-hero">
        <div className="hero-content">
          <h1>Basil Ahmad</h1>
          <p>16-year-old content creator sharing original reels since 2023. Creative, consistent, and ready to inspire!</p>
          <Button className="primary-btn" onClick={() => window.location.href="#reels"}>
            View Reels
          </Button>
        </div>
        <ThemeToggle />
      </section>
      <Footer />
    </>
  );
};

export default Home;
