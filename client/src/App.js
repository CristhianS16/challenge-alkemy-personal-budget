import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Operations from './pages/Operations';
import EditOperation from './pages/EditOperation';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  // States
  const [title, setTitle] = useState('');
  const [viewSpinner, setViewSpinner] = useState(false);
  const [viewError, setViewError] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect( () => {
    document.title = `Personal Budget | ${title}`;
  }, [title]);

  return (
    <Router>
      <div className="container-fluid">
        <div className="row p-5">
          <Header 
            title = {title}
          />
          <Switch>
            <Route path="/operations">
              <Operations 
                setTitle = {setTitle}
                setTotalBudget = {setTotalBudget}
                totalBudget = {totalBudget}
                viewSpinner = {viewSpinner}
                setViewSpinner = {setViewSpinner}
                viewError = {viewError}
                setViewError = {setViewError}
              />
            </Route>
            <Route path="/edit">
              <EditOperation 
                setTitle = {setTitle}
              />
            </Route>
            <Route path="/">
              <Home 
                setTitle = {setTitle}
                totalBudget = {totalBudget}
                setTotalBudget = {setTotalBudget}
                viewSpinner = {viewSpinner}
                setViewSpinner = {setViewSpinner}
                viewError = {viewError}
                setViewError = {setViewError}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
