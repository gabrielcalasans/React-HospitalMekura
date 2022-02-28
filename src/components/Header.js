import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Container, Nav, Figure, Dropdown} from 'react-bootstrap';
import {BsTelephonePlusFill, BsCalendar3, BsCalendar2Check} from 'react-icons/bs';
import {GoHome} from 'react-icons/go';
import{MdOutlineHomeRepairService} from 'react-icons/md';
import {FaStethoscope, FaHeartbeat} from 'react-icons/fa';
import {RiTimerFill} from 'react-icons/ri';
import {AiOutlineMan} from 'react-icons/ai';
import {ImEye} from 'react-icons/im';

import logo from '../images/logo.png';

function Header() {
  return( 
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" fixed="top">
        <Container>          
          <Link to="/" style={{ textDecoration: 'none' }}>    
            <Navbar.Brand> 
              <Figure>
                <Figure.Image
                  width={40}
                  height={5}
                  alt="logo"
                   src={logo}
                />
                <Figure.Caption style={{fontSize: 14}}  className="text-white logoTexto">
                  Hospital Mekura
                </Figure.Caption>
              </Figure>
            </Navbar.Brand>
          </Link>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto itensNavbar" navbar>
              <Nav.Link>
                <Link style={{ textDecoration: 'none' }} className="text-light" to="/">
                 <GoHome /> Home 
                </Link>   
              </Nav.Link>
                   
              <Dropdown>
                <Dropdown.Toggle variant="success">
                 <MdOutlineHomeRepairService /> Serviços
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/servicos/agendar-exame">                      
                      <BsCalendar3 />  Agendar Exame                  
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/servicos/acompanhar-exame">                      
                      <BsCalendar2Check /> Acompanhar Exame                     
                    </Link>
                  </Dropdown.Item>                  
                </Dropdown.Menu>
                
              </Dropdown>                
                          
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  <FaStethoscope /> Especialidades
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/especialidades/cronicas">                      
                      <RiTimerFill />  Crônicas                     
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/especialidades/cardiologia">                      
                      <FaHeartbeat /> Cardiologia                      
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/especialidades/urologia">                     
                      <AiOutlineMan /> Urologia                     
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/especialidades/oftalmologia">                     
                      <ImEye /> Oftalmologia                     
                    </Link>
                  </Dropdown.Item>                   
                </Dropdown.Menu>
                
              </Dropdown>             
            </Nav>
            <Nav>
              <Nav.Link>
                <Link style={{ textDecoration: 'none' }} className="text-light" to="/contato">
                  Fale Conosco <BsTelephonePlusFill /> 
                </Link>   
              </Nav.Link>
            
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
    
  )
}

export default Header;