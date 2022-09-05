import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CreateAlbumModal from '../CreateAlbumModal';
import './CreateButton.css';

function CreateButton() {
    const dispatch = useDispatch();
    const [showButtons, setShowButtons] = useState(false);

    const openTab = () => {
        if (showButtons) return;
        setShowButtons(true);
    }

    useEffect(() => {
        if (!showButtons) return;

        const closeTab = () => {
            setShowButtons(false);
        }

        document.addEventListener('click', closeTab);

        return () => document.removeEventListener('click', closeTab);
    }, [showButtons])

    return (
        <div className='create-buttons-container'>
            <button onClick={openTab} className='create-buttons'>Create</button>
            {showButtons && (
                <div className='create-dropdown'>
                    <CreateAlbumModal />
                    <button>Create Song</button>
                </div>
            )}
        </div>
    )
}

export default CreateButton;
