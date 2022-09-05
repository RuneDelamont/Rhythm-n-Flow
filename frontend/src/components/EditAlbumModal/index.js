import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditAlbumForm from './EditAlbumForm';
import './EditAlbumModal.css';

function EditAlbumModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit-album-button' onClick={() => setShowModal(true)} >Edit Song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAlbumForm setShowModal={setShowModal} />
                </Modal>
            )}

        </>
    )
}

export default EditAlbumModal;
