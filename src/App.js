import './App.css';
import ManageTutorTimes from './component/ManageTutorTimes';
import SignUpPage from './component/signUpPage/signUpPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from './component/navigationBar';
import { useEffect } from 'react'

const App = () => {

  const userId = 1;

  useEffect(() => {

    // perform some basic auth here if there is a jwt token. Make sure it is valid (i.e. we get a response back)
  }, []);

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
        <Route exact path="/">
          <div className="App">
            <ManageTutorTimes userId={userId} serverError={serverError} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
