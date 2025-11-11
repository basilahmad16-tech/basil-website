import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <section id="about" className="about-section">
                <h2>About Me</h2>
                <p>
                    I’m Basil Ahmad, a 16-year-old student and social media creator. I started posting content in 2023, initially sharing others’ content. After some stops and starts, I now consistently create my own reels. My focus is on original, engaging videos that connect with viewers.
                </p>
            </section>
            <Footer />
        </>
    );
};

export default About;
