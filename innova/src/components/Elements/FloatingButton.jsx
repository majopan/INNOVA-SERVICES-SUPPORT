import React, { useState } from 'react';
import '../../style/buton.css'; // Archivo CSS para los estilos
import workImage from '../../assets/svg/work.svg'; // Ajusta la ruta según tu estructura de carpetas

const FloatingButton = ({ onClick }) => (
    <div className="floating-button" onClick={onClick}>
        <img src={workImage} alt="Work" className="floating-button-image" />
    </div>
);

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                <h2 className="modal-title">Formulario de Contacto</h2>
                <form className="modal-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo:</label>
                        <input type="email" id="email" name="email" placeholder="Ingresa tu correo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Escribe tu mensaje"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            <FloatingButton onClick={toggleModal} />
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </>
    );
};

export default App;
