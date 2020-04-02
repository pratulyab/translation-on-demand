import React, { Component } from 'react';
import { Navbar, Container, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavbarApp extends Component {
    render(){
        return(
            <div>
                <Navbar style={{backgroundColor:'#f2576c'}}>
                    <Container>
                        <NavbarBrand href="/" style={{color:'white'}}>
                            Larynx
                        </NavbarBrand>
                        <Nav>
                            <NavItem>
                                <NavLink href='#' style={{color:'white'}}>
                                    About
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarApp;