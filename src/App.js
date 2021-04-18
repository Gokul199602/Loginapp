import './App.css';
import Main from "./components/Main/Main";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Home from "./components/Home/Home";
import {Link,Route,Switch,  BrowserRouter as Router,Redirect} from 'react-router-dom';
function App() {
  let checkIslogged = localStorage.isLogged;
  return (
    <Router>
      <div className="appContainer container">
        <Switch>
          <Route path="/" exact component = {Main}/>
          <Route path="/register" exact component = {RegisterForm}/>
          <Route path="/login" component = {LoginForm}/>
          {checkIslogged? <Route path="/home" exact component = {Home}/>:<Redirect exact from="/home" to="" />}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
