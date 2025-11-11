import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
    return (
        <>
            <Navbar />
            <section id="blog" className="blog-section">
                <h2>News & Achievements</h2>
                <p>Stay updated with my latest achievements, awards, and posts.</p>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
