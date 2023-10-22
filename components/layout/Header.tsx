import React, { useState, useEffect } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import Link from 'next/link'


const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">My Project Management</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="p-3">
                        Signed in as: <a href="#login">Roman</a>
                    </Navbar.Text>
                    <Link href="" passHref>
                        <Button >Log out</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;