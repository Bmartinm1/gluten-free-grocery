import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import CategoryIndex from './CategoryIndex';
<<<<<<< HEAD
import ProductShow from './ProductShow'
import CategoryShowPage from "./CategoryShowPage"
import NewProductForm from './NewProductForm'
=======
import ProductShow from './ProductShow';
import CategoryShowPage from "./CategoryShowPage";
>>>>>>> d5cb69059f9e71fa02e9fb9a9050dba4e8a5545f

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch (err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, []);
  
  return (
    <Router>
      <TopBar user={ currentUser } />
      <Switch>
        <Route exact path="/" component={ CategoryIndex } />
        <Route exact path="/users/new" component={ RegistrationForm } />
        <Route exact path="/user-sessions/new" component={ SignInForm } />
        <Route exact path="/products/:id" component={ ProductShow } />
        <Route exact path="/categories/:id" component={CategoryShowPage} />
        <Route exact path="/categories/:categoryId/products/new" component={NewProductForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
