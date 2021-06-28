import './App.css';
import ManageTutorTimes from './component/ManageTutorTimes';
import ManageMeetings from './component/ManageMeetings/ManageMeetings';
import SignUpPage from './component/signUpPage/signUpPage';
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
        <Route path="/manageMeetings">
          <ManageMeetings />
        </Route>
        <Route path="/">
        <ManageMeetings />
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
