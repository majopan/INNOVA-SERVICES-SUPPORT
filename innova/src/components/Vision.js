    import React from 'react';
    import '../styles/Vision.css';
    import logo from '../assets/logo.png';

    function Vision() {
    return (
        <div className="vision">
        {/* Sección superior con logo e imagen de fondo */}
        <div className="vision-header">
            <img
            src={logo}
            alt="Logo Innova"
            className="vision-logo"
            />
            <img
            src="https://via.placeholder.com/800x200"
            alt="Ciudad nocturna"
            className="vision-header-bg"
            />
        </div>

        {/* Sección de contenido */}
        <div className="vision-content">
            <div className="vision-title">
            <h2>VISION</h2>
            </div>
            <div className="vision-text-image">
            <div className="vision-text">
                <p>
                INNOVA SERVICES SUPPORT focuses all its efforts on positioning itself in the market as the best company for supplying trained personnel in all areas and for all types of work requirements, offering a human <strong>team with customer service</strong> experience in an inclusive and collaborative environment. Directly combined with the best positioning in the market of each company that requires our services.
                </p>
            </div>
            <div className="vision-image-container">
                <img
                src="https://via.placeholder.com/400"
                alt="Equipo trabajando"
                className="vision-image"
                />
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default Vision;
