import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';

const about =() => <h1>Hi</h1>;

const App = () => (
    <>
        <Header></Header>
        <BrowserRouter>
            <Switch>
                <Route path="/about" component={ about } />
            </Switch>
        </BrowserRouter>
    </>
   
);

export default App;
