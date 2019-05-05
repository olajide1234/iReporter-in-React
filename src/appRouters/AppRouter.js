import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/notFound/notFound';
import HomePage from '../containers/homepage';
import SignUpPage from '../containers/signUpPage';
import SignInPage from '../containers/signInPage';
import CreateRecord from '../containers/createRecord';
import Dashboard from '../containers/dashboard';
import SingleRecord from '../containers/singleRecord';
import AuthWrapper from '../components/AuthWrapper';
import SignedInAuth from '../components/SignedInAuth';


const AppRouter = () => (
  <div>
    <Switch>
      <SignedInAuth path="/" exact component={HomePage} />
      <SignedInAuth path="/sign_up" component={SignUpPage} />
      <SignedInAuth path="/sign_in" component={SignInPage} />
      <AuthWrapper path="/dashboard" component={Dashboard} />
      <AuthWrapper path="/single/:id" exact component={SingleRecord} />
      <AuthWrapper path="/create_record" component={CreateRecord} />
      <Route component={NotFound} exact />
    </Switch>
  </div>
);

export default AppRouter;
