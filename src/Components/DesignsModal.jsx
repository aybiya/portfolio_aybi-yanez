import React from 'react';
import Modal from 'react-modal';
import { FaTimesCircle } from "react-icons/fa";

const DesignsModal = ({ isOpen, onRequestClose, designs }) => {
  
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Design Modal">
        <section className='designs-modal'>
            <button className="designs_close-btn" onClick={onRequestClose}>
            <FaTimesCircle size={24} />
            </button>
            <section className='designs_container'>
                <h2>Diseños</h2>
                <article className='designs_images'>
                    {designs.map((design, index) => (
                    <img key={index} src={design} alt={`Design ${index + 1}`} style={{ width: '100%', marginBottom: '10px' }} />
                    ))}
                </article>
            </section>
        </section>
    </Modal>
  );
};

export default DesignsModal;