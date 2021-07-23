import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import '../styles/css/page/main.css';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import Footer from './Footer';
import Browse from './browse/Browse';
import Contact from './contact/Contact';
import RecipeInfo from './recipe/RecipeInfo';
import AccountAccess from './account/AccountAcces';
import User from './user/User';
import history from '../history';
import ScrollBtn from './layout/ScrollBtn';

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/browse/:type" component={Browse} />
          <Route exact path="/recipe/:id" component={RecipeInfo} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/logIn" component={AccountAccess} />
          <Route exact path="/account/:username" component={User} />
        </Switch>
        <Footer />
        <ScrollBtn />
      </Router>
    </div>
  );
}

export default App;
