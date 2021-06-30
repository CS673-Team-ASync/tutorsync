import './App.css';

//Colum
import TutorSubjectsAndTimes from './component/tutorSubjectsAndTimes/TutorSubjectsAndTimes';

//Luke
import Meeting from './component/Meeting/meeting';

//Rick
import SignUpPage from './component/signUpPage/signUpPage';

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
      <NavigationBar />
      <Switch>
        <Route path="/signUp">
          <SignUpPage />
        </Route>
        <Route path="/Meeting">
          <Meeting />
        </Route>
        <Route path="/">
          <Meeting />
        </Route>
        <Route path="/manageTutorTimes">
          <TutorSubjectsAndTimes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
