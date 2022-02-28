import {Container, Row, Col} from 'react-bootstrap';

function Especialidades({especialidade}) {
  return (
    <Container class="conteudo">
      <Row>
        <h1>{especialidade}</h1>
      </Row>
    
    </Container>
  )  
}

export default Especialidades;