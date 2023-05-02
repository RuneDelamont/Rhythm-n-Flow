import React, { useContext, createContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const SongContext = createContext();
export const useSong = () => useContext(SongContext);


export default function SongProvider({ children }){

    const songSRCRef = useRef();
    const [songSRC, setSongSRC] = useState();

    useEffect(() => {
        setSongSRC(songSRCRef.current);
    }, [])

    return (
        <>
            <SongContext.Provider value={{
                songSRC,
                setSongSRC
                }}>
                {children}
            </SongContext.Provider>
        </>
    )
}