import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BtnEntrar from '../Buttons/btn-entrar/index.js';
import BtnAcesso from '../Buttons/btn-primeiroAcesso/index.js';



import './style.css'

function navbar() {
  return (
    <>
      <Navbar expand="m" className='navConfig'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">InTec</Navbar.Brand>

          <div className='btn-flex'>
            <BtnAcesso />
            <BtnEntrar />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#sobre">Sobre</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;