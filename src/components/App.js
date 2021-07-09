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
import RecipeInfo from './recipe/RecipeInfo';
import AccountAccess from './account/AccountAcces';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/browse/:type" component={Browse} />
          <Route exact path="/recipe/:id" component={RecipeInfo} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/logIn" component={AccountAccess} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
