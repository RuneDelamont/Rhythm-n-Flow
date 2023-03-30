import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css'

function HomePage () {
    return (
        <div className='home-container'>

            <h1 className='home-title'>Rhythm n' Flow</h1>
            <h3>Get into the Flow</h3>
        </div>
    )
}

export default HomePage;
