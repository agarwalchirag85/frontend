import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Herosection from './component/Herosection';
import Home from './component/Home';

class App extends React.Component {

  constructor()
  {
    super();
    this.projectDetails = {
      backed: 89914,
      total_backers: 5007,
      days_left: 56,
    };
    this.state = {
      setVisible: false,
      visible: true,
    };
  }
  render(){
    return (
      <>
         {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#deets">More details</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
          </Navbar> */}
           {/* <AfterClick/> */}
          <Switch>
          <Route to='/'>
            <Herosection/>
            <Home/>
          </Route>
          </Switch>
      </>
     );
  }
}

export default App;
