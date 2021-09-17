import React from 'react';
import logo from '../images/TRAI.jpg';
import {
BrowserRouter as Router,
Switch,
Route,

} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Admin from './Admin';
import Product from './Product';

class Navbars extends React.Component{
render(){
return(
<div>
<div className="row">
<div className="col-md-12">
<Router>
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
<h4><img src={logo} className="logo" alt=" "/></h4>
<Navbar.Brand href="#home">KARMEGAM</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/about">About</Nav.Link>
<Nav.Link href="/contact">Contact</Nav.Link>
<Nav.Link href="/Admin">Admin</Nav.Link>
<Nav.Link href="/Product">Product</Nav.Link>

</Nav>

</Navbar.Collapse>
</Navbar>
<br />
<Switch>
<Route exact path="/">
<Home />
</Route>
<Route path="/about">
<About />
</Route>
<Route path="/contact">
<Contact />
</Route>
<Route path="/admin">
<Admin />
</Route><Route path="/product">
<Product />
</Route>
</Switch>
</Router>
</div>
</div>
</div>
)  
}
}
export default Navbars;
