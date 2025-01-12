    import React from 'react';
    import workImage from '../../assets/svg/work.svg'; // Ajusta la ruta según tu estructura de carpetas

    const FloatingButton = ({ onClick }) => {
    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
    };

    const hoverStyle = {
        transform: 'scale(1.1)',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
    };

    const handleMouseOver = (e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
    };

    const handleMouseOut = (e) => {
        Object.assign(e.currentTarget.style, {
        transform: 'scale(1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        });
    };

    return (
        <div
        style={buttonStyle}
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >
        <img src={workImage} alt="Work" style={imageStyle} />
        </div>
    );
    };

    export default FloatingButton;
