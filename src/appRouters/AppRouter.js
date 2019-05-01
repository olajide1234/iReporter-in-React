import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../components/notFound/notFound';
import HomePage from '../containers/homepage';
import SignUpPage from '../containers/signUpPage';
import SignInPage from '../containers/signInPage';
import CreateRecord from '../containers/createRecord';
import ViewDraft from '../containers/viewDraft';
import Dashboard from '../containers/dashboard';
import SingleRecord from '../containers/singleRecord';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sign_up" component={SignUpPage} />
        <Route path="/sign_in" component={SignInPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/drafts" component={ViewDraft} />
        <Route path="/single/:id" exact component={SingleRecord} />
        <Route path="/create_record" component={CreateRecord} />
        <Route component={NotFound} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
