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


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(songActions.getAllSongs());
    dispatch(albumActions.getAlbums());
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
            {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}

            <Route path='/songs/:songId'>
              <SongDetails />
            </Route>
            <Route path='/signup'>
              <SignupFormPage />
            </Route>
            <Route path='/songs'>
              <SongsPage />
            </Route>
            <Route path='/albums'>
              <AlbumsPage />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
