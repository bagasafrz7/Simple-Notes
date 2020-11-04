// import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Dashboard from '../Dashboard';
import Register from '../Register/register';
import Login from '../Login';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </div>
    </Router>
  );
}

export default App;
