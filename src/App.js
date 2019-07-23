import React from 'react';
import './App.css';
import FilterContainer from "./redux/containers/FilterContainer";
import CameraContainer from "./redux/containers/CameraContainer";
import CartContainer from "./redux/containers/CartContainer";
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Camera Shop</Navbar.Brand>
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
      </Navbar>
      <div className="App row">
        <div className="col-lg-8">
          <FilterContainer />
          <CameraContainer />
        </div>
        <div className="col-lg-4">
          <CartContainer />
        </div>
      </div>
    </>
  );
}

export default App;
