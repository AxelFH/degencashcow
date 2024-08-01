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
                <h1>Moo-ve Over for Mega Degen $Cash Cow!</h1>
                <h3>Welcome to the Moost Degen Cash Cow on the Solana Blockchain. Where the grass is greener, and the profits are mooooore bountiful. <a className="tolink" href="#">Join the DegenFi Moovement 💰🐄</a></h3>
            </div>
        </div>
    );
};

export default ProfessorSection;
