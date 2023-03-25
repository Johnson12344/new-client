import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import logo from "../assets/asset/asset 0.svg"

function MainNav() {
  // const {pathname} = useLocation();
  const hideStyle = {
    transform: "translateX(-100%)",
    transition: "transform 2s ease-in",
    display: "none"
 }

 const showStyle = {
  transform: "translateX(0)",
}

const [menu, setMenu] = useState(hideStyle)
const [home, setHome] = useState(showStyle)

const handleClick = ()=>{
  setHome(hideStyle)
  setMenu(showStyle)
}

const backClick = ()=>{
  setHome(showStyle)
  setMenu(hideStyle)
}



    return ( 
        <Navbar bg="light" expand="lg" sticky='top' className='my-nav' variant='dark'>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} width="100" height="30" className="align-top" alt="logo" />{''}
          <p className='logo-text'>EDD Prepaid Debit Card</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='ham-btn'/>
          <Navbar.Collapse id="basic-navbar-nav" className='my-navCo'>
            <Nav className="me-auto" style={menu}>
              <Nav.Link href="" className='back b-link' onClick={backClick}>Back</Nav.Link>
              <Nav.Link href="/balance" className='b-link'>Balance & Transactions</Nav.Link>
              <Nav.Link href="" className='b-link'>Statements</Nav.Link>
              <Nav.Link href="/transfer" className='b-link'>Transfers</Nav.Link>
              <Nav.Link href="" className='b-link'>ATM Locator</Nav.Link>
              <Nav.Link href="" className='b-link'>Dispute Transactions</Nav.Link>

            </Nav> 
            
            <Nav className="me-auto" style={home}>
              <Nav.Link href="/" className='home link'>Home</Nav.Link>
              <Nav.Link className='link money' onClick={handleClick}>My Money</Nav.Link>
              <Nav.Link href="" className='link set'>My settings</Nav.Link>
              <Nav.Link href="" className='replace link'>Replace My Card</Nav.Link>
              <Nav.Link href="" className='sign-out link'>Sign Out</Nav.Link>

            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>  
     );
}

export default MainNav;