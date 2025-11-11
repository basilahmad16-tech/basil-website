import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Modal from "../components/Modal";

const reelsData = [
    {
        title: "Sample Reel",
        video: "/assets/videos/sample.mp4",
        thumbnail: "/assets/images/placeholder.png",
    },
    // Add more reels here
];

const Reels = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const openModal = (video) => {
        setCurrentVideo(video);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentVideo(null);
    };

    return (
        <>
            <Navbar />
            <section id="reels" className="reels-section">
                <h2>Reels / Portfolio</h2>
                <div className="reels-grid">
                    {reelsData.map((reel, index) => (
                        <Card
                            key={index}
                            title={reel.title}
                            thumbnail={reel.thumbnail}
                            onClick={() => openModal(reel.video)}
                        />
                    ))}
                </div>
                <Modal show={modalOpen} onClose={closeModal}>
                    {currentVideo && <video src={currentVideo} controls autoPlay />}
                </Modal>
            </section>
            <Footer />
        </>
    );
};

export default Reels;
