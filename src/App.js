import './App.css';
import ManageTutorTimes from './component/ManageTutorTimes';
import SignUpPage from './component/signUpPage/signUpPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  const userId = 1;

  const serverError = (err) => {
    console.log(err);
  }

  return (
    <Router>
      <Switch>
        <Route path="/signUp">
          <SignUpPage />
        </Route>
        <Route path="/">
          <div className="App">
            <ManageTutorTimes userId={userId} serverError={serverError} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
