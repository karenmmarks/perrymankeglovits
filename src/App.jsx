import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Views/Home/Home.jsx';
import About from './Components/Views/About/About.jsx';
import Archives from './Components/Views/Archives/Archives.jsx';
import Donate from './Components/Views/Donate/Donate.jsx';

const App = () => {
  const [alert, setAlert] = useState();
  const handleClose = () => setAlert();

  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
          />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/archives" component={Archives} />
          <Route path="/donate">
            <Donate alert={alert} setAlert={setAlert} handleClose={handleClose} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
