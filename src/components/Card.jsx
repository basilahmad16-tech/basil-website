import React from "react";

const Card = ({ title, thumbnail, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;
