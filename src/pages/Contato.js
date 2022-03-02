import {Container, Row, Col} from 'react-bootstrap';
import {BsWhatsapp, BsLinkedin, BsGithub} from 'react-icons/bs';
import {HiMail} from 'react-icons/hi';

function Contato() {
  return (
    <Container>
      <Row>
        <h1 className="logoTexto">Contato</h1>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <p align="justify" className="text-secondary itensNavbar">
            Para entrar em contato com com o criador do site, é possível mandar mensagens nas redes sociais, como o <a href="https://www.linkedin.com/in/gabriel-calasans-689241232/" style={{textDecoration: 'none'}}>LinkedIn <BsLinkedin className="text-primary" /></a> ou enviar um email para gcalasans71@gmail.com <HiMail className="text-danger" />. 
          </p>
          <p align="justify" className="text-secondary itensNavbar">
            Outra opção de contato é o envio de mensagens através do <span className="text-success" >WhatsApp <BsWhatsapp /></span>.
          </p>
          <p align="justify" className="text-secondary itensNavbar">
            Você pode ainda encontrar esse e outros projetos em <a className="text-dark"href="https://www.github.com/gabrielcalasans" style={{textDecoration: 'none'}}>Github <BsGithub /></a>.
          </p>
        </Col>
        <Col sm={12} md={6}>
          <p>
            <a href="https://www.linkedin.com/in/gabriel-calasans-689241232/" style={{textDecoration: 'none'}} className="text-primary itensNavbar" ><BsLinkedin /> LinkedIn </a>
          </p>
          <p>
            <span className="text-success itensNavbar" >WhatsApp <BsWhatsapp /> (13) 99787-4597</span>
          </p>
          <p>
            <HiMail className="text-danger" /><span className="itensNavbar"> gcalasans71@gmail.com </span>
          </p>
          <p>
            <a className="text-dark itensNavbar"href="https://www.github.com/gabrielcalasans" style={{textDecoration: 'none'}}><BsGithub /> Github</a>
          </p>
        </Col>
      </Row>
    </Container>
  )  
}

export default Contato;