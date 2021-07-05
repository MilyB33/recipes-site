import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../styles/css/page/main.css';
import Navigation from './Navigation';
import Home from './home/Home';
import Footer from './Footer';
import Browse from './browse/Browse';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/browse">
            <Browse />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
