import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function Navigation({ConnectMetaMask, account}){
    return (
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed='top'>
          <Navbar.Brand >NFT Marketplace</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Create">Create</Nav.Link>
              <Nav.Link as={Link} to="/ListedItems">Listed Items</Nav.Link>
              <Nav.Link as={Link} to="/Purchases">Purchases</Nav.Link>
            </Nav>
            <Nav>
                {account ? (
                  <Button variant="outline-light" size = 'lg'>
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}</Button>
                ):(
                  <Button variant="outline-light" size = 'lg' onClick={ConnectMetaMask}>Connect Wallet</Button>
                )}
            </Nav>
          </Navbar.Collapse>  
      </Navbar>
    );
  }
  
  export default Navigation;