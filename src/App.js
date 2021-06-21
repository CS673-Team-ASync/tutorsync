import './App.css';
import ManageTutorTimes from './component/ManageTutorTimes';

const App = () => {

  const userId = 1;
  
  const serverError = (err) => {
    console.log(err);
  }

  return (
    <div className="App">
      <ManageTutorTimes userId={userId} serverError={serverError} />
    </div>
  );  
}

export default App;
