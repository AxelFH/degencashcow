import React from 'react';
import bgImage from '../../assets/images/bgm.png'; // Ajusta la ruta a la imagen de fondo
import charImage from '../../assets/images/cow/banner.png'; // Ajusta la ruta a la imagen del personaje

const ProfessorSection = () => {
    return (
        <div className="professor-section">
            <div className="text-container">
                <h1>Mooooo</h1>
                <h3>Welcome to the Moost Degen Cash Cow on the Solana Blockchain. Join the DegenFi Moovement  💰🐄</h3>
            </div>
            <img
                className="character-image"
                src={charImage}
                alt="Personaje"
            />

        </div>
    );
};

export default ProfessorSection;
