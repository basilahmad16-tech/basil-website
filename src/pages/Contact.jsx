import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! You can later integrate backend to actually send emails.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <Navbar />
            <section id="contact" className="contact-section">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                    <Button type="submit">Send Message</Button>
                </form>
                <p>Email: <a href="mailto:basilahmad614@gmail.com">basilahmad614@gmail.com</a></p>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
