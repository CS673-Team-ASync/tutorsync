import './App.css';

//Colum
import TutorSubjectsAndTimes from './component/tutorSubjectsAndTimes/TutorSubjectsAndTimes';

//Colum - Page to test the scheduled meeting modal with the Express server.
import ModalTestPage from './component/scheduleMeetingModal/ModalTestPage';

//Luke
import Meeting from './component/Meeting/meeting';

//Rick
import SignUpPage from './component/signUpPage/signUpPage';
import ProtectedRoute from './component/protectedRoute'


import LandingPage from './component/landingPage/landingPage';

//Tuoyang
import ManageMeetings from './component/ManageMeetings/ManageMeetings'
import UserProfile from './component/userProfile/userProfile';

//Yi-Chun
import SearchPage from './component/SearchPage/SearchPage';


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

  const handleError = (errorObj) => {                
    if(errorObj.status) {
      console.log(`Status: ${errorObj.status}`);
    }
    if(errorObj.msg) {
      console.log(`Message: ${errorObj.msg}`);
    } 
  }   

  return (
    <Router>
      <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>

        <Route exact path="/modal" render={() => (
          <ModalTestPage handleError={handleError} />
        )} />

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
          component={SearchPage}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <ProtectedRoute
          exact
          path="/manageMeetings"
          component={ManageMeetings}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <ProtectedRoute
          exact
          path="/userProfile"
          component={UserProfile}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <ProtectedRoute
          exact
          path="/tutor"
          component={TutorSubjectsAndTimes}
          handleError={handleError}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Route exact path="/landing" render={() => (
          <LandingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )} />
        <Route exact path="/signUp" render={() => (
          <SignUpPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
