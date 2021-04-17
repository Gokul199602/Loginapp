import './App.css';
import Main from "./components/Main/Main";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Home from "./components/Home/Home";
import {Link,Route,Switch,  BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="appContainer container">
        <Main/>
        <Switch>
          <Route path="/" exact component = {Main}/>
          <Route path="/register" exact component = {RegisterForm}/>
          <Route path="/login" component = {LoginForm}/>
          <Route path="/home" exact component = {Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
