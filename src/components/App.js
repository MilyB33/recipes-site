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
import Contact from './contact/Contact';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            exact
            path="/browse/:type"
            component={Browse}
          ></Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
