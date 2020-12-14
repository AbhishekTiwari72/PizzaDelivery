import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Home from "./components/Home";
//import Contact from "./components/Contact";
import Newes from "./components/News";
import Login from "./components/Login"
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
    <div >
    <Header />
    <About />
    <Shop />
    <Menu />
    <Clients />
    <Prices />
    <Form />
    </div >
    );
}

export default App;
