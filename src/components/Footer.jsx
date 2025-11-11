import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Basil Ahmad. All rights reserved.</p>
            <div className="social-links">
                <a href="https://www.tiktok.com/@basilahmad_16" target="_blank" rel="noreferrer">TikTok</a>
                <a href="https://www.instagram.com/basilahmad16" target="_blank" rel="noreferrer">Instagram</a>
                <a href="http://www.facebook.com/basilahmad11" target="_blank" rel="noreferrer">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer;
