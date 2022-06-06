import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { Forme } from './forme';

function App() {
  return (
    <div className="App">
     <naveBare/>
     <h1>THIS IS TITLe </h1>
     <Forme/>
    </div>
  );
}

export default App;
