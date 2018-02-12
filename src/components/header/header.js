import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Nav, NavItem, NavDropdown, MenuItem, Navbar  } from 'react-bootstrap';
import TrickyLogo from '../../static/images/tricky-logo.png';
import './dist/style.css';

class AppHeader extends Component {
  render() {
    return (
    <header className="header-wrapper">
    <Navbar className="tricky-nav-bar" fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
          <NavItem to="/">
            <img className='logo-tricky' src={TrickyLogo}  alt="Tricky Solution"/>
          </NavItem>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav className="tricky-search right">
       <div className="header-search-form">
       <Form >
         <FormGroup controlId="formInlineName">
           <FormControl type="text" placeholder="Search" />
           <Button type="submit" className="search-btn">
             <em className="icon-magnifier"></em>
           </Button>
         </FormGroup>

       </Form>
       </div>
    </Nav>
      <Nav pullRight className="tricky-nav">
        <NavDropdown eventKey="1" className="active" title="Technologies" >
          <MenuItem eventKey="1.1">Action</MenuItem>
          <MenuItem eventKey="1.2">Another action</MenuItem>
          <MenuItem eventKey="1.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="1.4">Separated link</MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} href="#">Product</NavItem>
        <NavItem eventKey={3} href="#">Tutorials </NavItem>
        <NavItem eventKey={4} href="#">Projects/Training </NavItem>
        <NavItem eventKey={5} href="#">Blog </NavItem>
        <NavItem eventKey={6} href="#" className="login">Login</NavItem>
        <NavItem eventKey={7} href="#" className="signup">Sign Up</NavItem>
       </Nav>

     </Navbar>
    </header>
    );
  }
}

export default AppHeader;
