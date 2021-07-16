import './App.css';
import Login from './components/Login';
import{BrowserRouter as Router,Route} from "react-router-dom"
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={HomePage} />
    </Router>
    </>
  );
}

export default App;
