import React from "react";
import "./App.css";
import Login from "./component/Login"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./component/Dashboard";
import Configuration from "./component/Configuration"
import Profile from "./component/Profile"
import Test from './component/test';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' Component={Login} />
                <Route exact path='/dashboard' Component={Dashboard} />
                <Route exact path='/configuration' Component={Configuration} />
                <Route exact path='/profile' Component={Profile} />
                <Route exact path='/test' Component={Test} />

            </Routes>
        </Router>
    );
}
export default App;


