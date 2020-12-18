import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Operations from './components/Operations';
import Home from './components/Home';

function App() {

  const [title, setTitle] = useState('');

  return (
    <Router>
      <div className="container">
        <div className="row">
          <Header 
            title = {title}
          />
          <Switch>
            <Route path="/operations">
              <Operations 
                setTitle = {setTitle}
              />
            </Route>
            <Route path="/">
              <Home 
                setTitle = {setTitle}
              />
            </Route>
          </Switch>
        </div>
        <div className="row">
        <footer className="col-12 bg-dark text-white">
          <h1>Esto es el footer</h1>
        </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
