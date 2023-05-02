import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import * as albumActions from '../../store/album';
import { useSong } from '../../context/Song';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// access the custom hook to put song url into player
const GetSong = () => {

  const { songSRC, setSongSRC } = useSong();
  return songSRC;
}

const Player = () => (
  <AudioPlayer
    // autoPlay
    // play song after change to new song
    autoPlayAfterSrcChange={true}

    src={GetSong()}

    // onPlay={e => console.log(GetSong())}
  />
);

export default Player;