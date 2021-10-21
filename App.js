import './App.css';
import Nav from './Components/Header/Nav';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Food from './Components/Food';

export default function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/food" exact component={Food} />
          </Switch>
      </div>
    </Router>
  );
}