import React from 'react';
import charImage from '../../assets/images/cow/cowi.gif'; // Ajusta la ruta a la imagen del personaje
import cloudImage from '../../assets/images/cow/cloud.png'; // Ajusta la ruta a la imagen de la nube

const ProfessorSection = () => {
    return (
        <div className="professor-section">
            <div className="cloud-container">
                <img className="cloud cloud1" src={cloudImage} alt="Nube" />
                <img className="cloud cloud2" src={cloudImage} alt="Nube" />
                <img className="cloud cloud3" src={cloudImage} alt="Nube" />
                <img className="cloud cloud4" src={cloudImage} alt="Nube" />
                <img className="cloud cloud5" src={cloudImage} alt="Nube" />
                <img className="cloud cloud6" src={cloudImage} alt="Nube" />
            </div>
            
            <div className="circle-container">
                <img
                    className="character-image"
                    src={charImage}
                    alt="Personaje"
                />
            </div>
            <div className="text-container">
                <h1>Welcooooooooooome</h1>
                <h3>Welcome to the Moost Degen Cash Cow on the Solana Blockchain. Join the DegenFi Moovement 💰🐄</h3>
            </div>
        </div>
    );
};

export default ProfessorSection;
