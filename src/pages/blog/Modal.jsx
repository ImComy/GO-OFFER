import React from 'react';
import { RiCloseCircleFill } from "react-icons/ri";

const Modal = ({ children, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal-content'>
                <button className='modal-close' onClick={onClose}><RiCloseCircleFill /></button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
