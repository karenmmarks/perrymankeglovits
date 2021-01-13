import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import {
  Alert, Row, Col, Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Views/Home/Home.jsx';
import About from './Components/Views/About/About.jsx';
import Archives from './Components/Views/Archives/Archives.jsx';
import Donate from './Components/Views/Donate/Donate.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  const [alert, setAlert] = useState();

  const paypalAlert = () => {
    setAlert(
      <Alert variant="dark">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Alert.Heading>We are heading over to PayPal now</Alert.Heading>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <Button className="mb-2" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=76FEZSCQWNMQC&currency_code=USD" variant="outline-info">
              <strong>Continue to PayPal</strong>
            </Button>
            {' '}
            <Button className="mb-2" onClick={() => setAlert()} variant="outline-danger">
              <strong>No take me back!</strong>
            </Button>
          </Col>
        </Row>
      </Alert>,
    );
  };

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
          <Route path="/home">
            <Home alert={alert} paypalAlert={paypalAlert} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/archives" component={Archives} />
          <Route path="/donate">
            <Donate alert={alert} paypalAlert={paypalAlert} />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
