import './App.css';

//Colum
import TutorSubjectsAndTimes from './component/tutorSubjectsAndTimes/TutorSubjectsAndTimes';

//Luke
import Meeting from './component/Meeting/meeting';

//Rick
import SignUpPage from './component/signUpPage/signUpPage';
import ProtectedRoute from './component/protectedRoute'

import LandingPage from './component/landingPage/landingPage';


//Yi-Chun
// import SearchPage from './component/SearchPage/SearchPage';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from './component/navigationBar';
import { useEffect, useState } from 'react'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <Router>
      <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <ProtectedRoute
          exact
          path="/Meeting"
          component={Meeting}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <ProtectedRoute
          exact
          path="/"
          component={Meeting}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Route path="/tutor">
          <TutorSubjectsAndTimes />
        </Route>
        <Route path="/landing">
          <LandingPage />
        </Route>
        <Route exact path="/signUp" render={() => (
          <SignUpPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
