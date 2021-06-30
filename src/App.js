import './App.css';

// bootstrap basic styling
import 'bootstrap/dist/css/bootstrap.min.css';

//Colum
import TutorSubjectsAndTimes from './component/tutorSubjectsAndTimes/TutorSubjectsAndTimes';

//Luke
import ManageMeetings from './component/ManageMeetings/ManageMeetings';

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
        <Route path="/ManageMeetings">
          <ManageMeetings />
        </Route>
        <Route path="/SearchPage">
          <SearchPage/>
        </Route>
        <Route path="/manageTutorTimes">
          <TutorSubjectsAndTimes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
