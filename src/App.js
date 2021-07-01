import './App.css';

//Colum
import TutorSubjectsAndTimes from './component/tutorSubjectsAndTimes/TutorSubjectsAndTimes';

//Luke
import Meeting from './component/Meeting/meeting';

//Rick
import SignUpPage from './component/signUpPage/signUpPage';

import LandingPage from './component/landingPage/landingPage';


//Yi-Chun
import SearchPage from './component/SearchPage/SearchPage';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from './component/navigationBar';

const App = () => {

  return (
    <Router>
      <NavigationBar/>
      <Switch>
        <Route path="/signUp">
          <SignUpPage />
        </Route>

        <Route path="/landing">
          <LandingPage />
        </Route>
<<<<<<< Updated upstream
        <Route path="/">
          <div className="App">
            <ManageTutorTimes userId={userId} serverError={serverError} />
          </div>

        <Route path="/Meeting">
=======
        {/* <Route exact path="/">
>>>>>>> Stashed changes
          <Meeting />
        </Route> */}
        <Route exact path="/">
          <SearchPage />
        </Route>
      
        <Route path="/tutor">
          <TutorSubjectsAndTimes />

        </Route>

      </Switch>
    </Router>
  );
}

export default App;
