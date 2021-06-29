import './App.css';
// import 'react-bootstrap/dist/css/bootstrap.min.css';
//Colum
import ManageTutorTimes from './component/ManageTutorTimes';

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

  const userId = 1;

  const serverError = (err) => {
    console.log(err);
  }

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
        <div className="App">
            <ManageTutorTimes userId={userId} serverError={serverError} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
