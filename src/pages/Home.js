import Sliders from '../components/Sliders.js';
import Cartao from '../components/Cartao.js';
import {Container, Row, Col} from 'react-bootstrap';

import agendaConsulta from '../images/cards/consulta.jpg';
import checarConsulta from '../images/cards/checar.jpg';
import historia from '../images/cards/historia.jpg';


function Home() {
  
  return (
    <div>
      <Sliders />
      <Container className="conteudo">
        <Row align="center">
          
          <Col className="conteudo">            
            <Cartao              
              titulo="Agendar Consulta"
              texto="Interessado em realizar um agendamento de exame conosco?"
              imagem={agendaConsulta}
              botaoTexto="Agendar"
              botaoTipo="warning"
              link="/servicos/agendar-exame"
            />             
          </Col>
            
          <Col className="conteudo">
            <Cartao              
              titulo="Checar Consulta"
              texto="Acompanhe o andamento de seus exames"
              imagem={checarConsulta}
              botaoTexto="Acompanhar"
              botaoTipo="success"
              link="/servicos/consultar-exame"
            />       
          </Col>
          
          <Col className="conteudo">
            <Cartao              
              titulo="Sobre nós"
              texto="Descubra mais sobre nossa história, valores e missão"
              imagem={historia}
              botaoTexto="Sobre nós"
              botaoTipo="primary"
              link="/sobre-nos"
            />        
          </Col>
          
        </Row>
      </Container>
    </div>
  )  
}

export default Home;