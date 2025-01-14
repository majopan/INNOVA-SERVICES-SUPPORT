    import React, { useState } from 'react';
    import '../../style/buton.css'; // Archivo CSS para los estilos
    import workImage from '../../assets/svg/work.svg'; // Ajusta la ruta según tu estructura de carpetas
    import JobApplication from "./JobApplicationForm"; // Ajusta la ruta si es necesario

    const FloatingButton = ({ onClick }) => (
        <div className="floating-button" onClick={onClick}>
            <img src={workImage} alt="Work" className="floating-button-image" />
        </div>
    );

    const Modal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;
    
        return (
        <>
            <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                &times;
                </button>
                <div className="modal-body">
                <h2 className="modal-title">Job Application</h2>
                <JobApplication />
                </div>
            </div>
            </div>
        </>
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
