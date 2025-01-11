    import React from 'react';
    import '../styles/Home.css';
    import logo from '../assets/logo.png';
    import principal from '../assets/portada.png';

    function Home() {
    return (
        <div className="home">
        {/* Sección superior */}
        <div className="header">
            <div className="header-content">
            <img
            src={logo}
            alt="Logo Innova"
            className="logo"
            />

            <div className="header-text">
                <h1>Innova Services Support</h1>
                <h2>Trained people, guaranteed results!</h2>
            </div>
            </div>
            <div className="background-image">
            {/* Imagen de fondo */}
            <img
                src={principal}
                alt="Ciudad nocturna"
                className="city-image"
            />
            </div>
        </div>

        {/* Sección central */}
        <div className="middle-section">
            <img
            src="https://via.placeholder.com/300"
            alt="Logo central"
            className="middle-logo"
            />
        </div>

        {/* Sección inferior */}
        <div className="footer">
            <p>Trained people, guaranteed results!</p>
        </div>
        </div>
    );
    }

    export default Home;
