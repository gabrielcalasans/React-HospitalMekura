import {Navbar, NavbarBrand, Collapse, NavbarToggler, NavLink, NavItem, Nav, NavbarText, DropdownMenu, UncontrolledDropdown, DropdownItem, DropdownToggle} from 'reactstrap';
import {Link} from 'react-router-dom';
function Header() {
  return(
     <div>
      <Navbar
        color="light"
        expand="md"
        light
      >  
        <Link to="/" style={{ textDecoration: 'none' }}>    
          <NavbarBrand>
            Cobra Ouro
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <Link style={{ textDecoration: 'none' }} to="/">
                <NavLink>
                  Home 
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>              
              <Link style={{ textDecoration: 'none' }} to="/contato">
                <NavLink>
                  Contato 
                </NavLink>
              </Link>
            
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Especialidades
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link style={{ textDecoration: 'none' }} to="/especialidades/cronicas">
                    <NavLink>
                      Doenças Crônicas
                    </NavLink>
                  </Link>                  
                </DropdownItem>
                <DropdownItem>
                  <Link style={{ textDecoration: 'none' }} to="/especialidades/cardiologia">
                    <NavLink>
                      Cardiologia
                    </NavLink>
                  </Link>  
                </DropdownItem>                
                <DropdownItem>
                  <Link style={{ textDecoration: 'none' }} to="/especialidades/urologia">
                   <NavLink>
                      Urologia 
                    </NavLink>
                  </Link>  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            Simple Text
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;