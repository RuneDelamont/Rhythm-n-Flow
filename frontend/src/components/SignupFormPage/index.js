import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import './SignupForm.css';
import '../Navigation/Navigation.css';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='button-sign-up' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}


export default SignupFormModal;
