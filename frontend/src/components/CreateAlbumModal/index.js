import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateAlbumForm from './CreateAlbumForm';
import './CreateAlbum.css';

function CreateAlbumModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='create-album-button' onClick={()=> setShowModal(true)}>Create Album</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <CreateAlbumForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default CreateAlbumModal
