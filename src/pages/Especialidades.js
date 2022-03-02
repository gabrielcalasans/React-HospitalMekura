import {Container, Row, Col} from 'react-bootstrap';
import cronicas from '../images/especialidades/cronicas.jpg';
import oftalmologia from '../images/especialidades/oftalmologia.jpg';
import cardiologia from '../images/especialidades/cardiologia.jpeg';
import urologia from '../images/especialidades/urologia.jpg';

function Especialidades({especialidade}) {
  
  function escolheTexto(especialidade) {
    switch (especialidade){
      case 'Crônicas':
        return "A especialidade de doenças crônicas trata sobre problemas comuns e bastante frequentes para maioria da população. Entre as enfermidades analisadas, temos diabetes, obesidade e enxaqueca.";
        break;
      
      case 'Urologia':
        return "A Urologia é uma especialidade médica dedicada ao estudo e tratamento de doenças do aparelho urinário (rins, ureter e bexiga) de homens e mulheres e de enfermidades que acometem o aparelho genital masculino (próstata, testículos e pênis).";
        break;
      
      case 'Cardiologia':
        return "Cardiologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório.";
        break;
        
      case 'Oftalmologia':
        return "A oftalmologia é uma especialidade da medicina que estuda e trata as doenças relacionadas ao olho, à refração e aos olhos e seus anexos. O médico oftalmologista realiza cirurgias, prescreve tratamentos e correções para os distúrbios de visão";
        break;      
        
    }
      
  }
  
   function escolheImagem(especialidade) {
    switch (especialidade){
      case 'Crônicas':        
        return cronicas;
        break;
      
      case 'Urologia':
        return urologia;
        break;
      
      case 'Cardiologia':
        return cardiologia;
        break;
        
      case 'Oftalmologia':
        return oftalmologia;
        break;      
        
    }
      
  }
  
  
  
  
  return (
    <Container class="conteudo">
      <Row>        
        <h1 className="logoTexto">{especialidade}</h1>
      </Row>
      <Row>
        <Col align="justify" sm={12} md={6} >
          <p className="text-secondary itensNavbar">{escolheTexto(especialidade)}</p>
        </Col>
        <Col sm={12} md={6}>
          <img src={escolheImagem(especialidade)} className="img-fluid shadow-sm rounded mx-auto" />
        </Col>
      </Row>
    
    </Container>
  )  
}

export default Especialidades;