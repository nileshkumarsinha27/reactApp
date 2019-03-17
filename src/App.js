import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Books from './components/books/Books';
import Articles from './components/articles/Articles';
import './App.css';
const App = props => (
  <div id="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/books" />
        </Route>
        <Route path="/books">
          <Layout>
            <Books />
          </Layout>
        </Route>
        <Route path="/articles">
          <Layout>
            <Articles />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);
export default App;
