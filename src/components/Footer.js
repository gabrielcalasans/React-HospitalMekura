import {SiFacebook, SiTwitter, SiInstagram} from 'react-icons/si';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Footer(){
  return(
    <footer className="bg-gray rodape">
      <Container>
        <Row className="socialGrupo">
          <div className="social">
            <a href="https://www.facebook.com">
              <SiFacebook />
            </a>
            <a href="https://www.twitter.com">
              <SiTwitter />
            </a>
            <a href="https://www.instagram.com">
              <SiInstagram />
            </a>
            <a href="https://github.com/gabrielcalasans">
              <BsGithub />
            </a>
             <a href="https://www.linkedin.com/in/gabriel-calasans-689241232/">
              <BsLinkedin />
            </a>
          </div>        
        </Row>
        <Row>
          <ul className="list-inline listaLinks">
            <Link to="/" style={{ textDecoration: 'none' }}><li className="list-inline-item">Home</li></Link>
            <Link to="/contato" style={{ textDecoration: 'none' }}><li className="list-inline-item">Contato</li></Link>
            <Link to="/sobre-nos" style={{ textDecoration: 'none' }}><li className="list-inline-item">Nossa História</li></Link>
          </ul>
        </Row>
        <Row>
          <p style={{fontSize: 11}} className="text-success">Gabriel Calasans © 2022</p>
        </Row>
      </Container>  
    </footer> 
  )
}

export default Footer;