import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSongForm from './EditSongForm';
import './EditSongModal.css';


function EditSongModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit-song-button' onClick={() => setShowModal(true)}>Edit Song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSongForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default EditSongModal;
