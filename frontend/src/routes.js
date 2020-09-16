import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import List from './pages/List';
import Edit from './pages/Edit';
import Success from './pages/Success';

function Routes(){
  return(
    <BrowserRouter>

      <Route path="/" component={Home} exact/>
      <Route path="/register" component={Register}/>
      <Route path="/list" component={List}/>
      <Route path="/edit" component={Edit}/>
      <Route path="/success" component={Success}/>

    </BrowserRouter>
  );
}

export default Routes;