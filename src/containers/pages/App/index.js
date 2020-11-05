// import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Dashboard from '../Dashboard';
import Register from '../Register/register';
import Login from '../Login';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
