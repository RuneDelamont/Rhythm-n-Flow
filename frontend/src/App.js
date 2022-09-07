import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';
import * as songActions from './store/song';
import * as albumActions from './store/album';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage/HomePage';
import SongsPage from './components/Songs';
import AlbumsPage from './components/Albums';
import SongDetails from './components/SongDetails';
import AlbumDetails from './components/AlbumDetails';
import NotFoundPage from './components/NotFoundPage';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(songActions.getAllSongs());
    dispatch(albumActions.getAllAlbums());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch]);

  return isLoaded && (
    <div className='container'>
      <div className='header'>
        <Navigation isLoaded={isLoaded} />
      </div>
      <div className='content'>
        {isLoaded && (
          <Switch>
            <Route exact path='/songs/:songId'>
              <SongDetails />
            </Route>
            <Route exact path='/albums/:albumId'>
              <AlbumDetails />
            </Route>
            <Route exact path='/signup'>
              <SignupFormPage />
            </Route>
            <Route exact path='/songs'>
              <SongsPage />
            </Route>
            <Route exact path='/albums'>
              <AlbumsPage />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
