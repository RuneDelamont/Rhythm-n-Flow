import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import * as albumActions from '../../store/album';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
    <AudioPlayer
    autoPlay
    src="https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Astronaut_(getmp3.pro).mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Player;