import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css'

function HomePage () {
    return (
        <div className='home-container'>

            <h1 className='home-title'>SoundCloud</h1>
            <h3>Discover more with SoundCloud</h3>
        </div>
    )
}

export default HomePage;
