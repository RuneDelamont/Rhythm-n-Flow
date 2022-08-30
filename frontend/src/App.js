import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}
          <Route exact path ='/'>Home</Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/songs'>Songs</Route>
          <Route path='/albums'>Albums</Route>
        </Switch>
      )}
    </>
  );
}

export default App;
