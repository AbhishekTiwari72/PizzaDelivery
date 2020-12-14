import React from "react";
import Login from './Login';
//import Form from 'Form';
const Navbar = () => {
    return ( <
        nav className = "navbar" >
        <
        div className = "navbar__text" >
        <
        div className = "logo" >
        <
        img src = "/img/logo.png"
        alt = "logo" / >

        <
        /div> <
        ul className = "navbar__ul" >
        <
        li >
        <
        a href = "/" > Home < /a> < /
        li > <
        li >
        <
        a href = "/menu" > Menu < /a> < /
        li > <
        li >
        <
        a href = "/shop" > Shop < /a> < /
        li > <
        li >
        <
        a href = "/news" > News < /a> < /
        li > <
        li >
        <
        a href = "" > Contact < /a> < /
        li > <
        li >
        <
        a href = "/login" > Login < /a> < /
        li > <
        /ul> < /
        div > <
        /nav>
    );
};

export default Navbar;
