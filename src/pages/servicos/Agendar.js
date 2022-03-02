import {Container, Row, Col} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';



function Agendar() {  
  return (
    <Container>
      <Row>
        <h1 className="logoTexto">Agendar Exame</h1>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Row>
            <h3 className="text-success itensNavbar">Formulário</h3>
          </Row>
          <Row>
            <form className="text-secondary itensNavbar">
              <Row align={"justify"}>
                <div className="col-12 text-justify" >
                  <label for="nome">Nome</label>
                  <input className="form-control" name="nome" id="nome" type="text" placeholder="Digite seu nome" />
                </div>
              </Row>
              <Row align={"justify"} >                
                <div className="col-12 col-md-4 text-justify">
                    <label for="cpf">CPF</label>
                    <MaskedFormControl type="text" name="cpf" id="cpf" mask="111.111.111-11" />                  
                </div>
                <div className="col-12 col-md-4 text-justify">                 
                  <label for="data">Data para Consulta</label>
                  <input className="form-control" type="date" id="data" name="data"/>
                </div>
                <div className="col-12 col-md-4">
                  <label for="especialidade">Especialidade</label>
                  <select id="especialidade" className="form-select">
                    <option value="cronica">Doenças Crônicas</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="urologia">Urologia</option>
                    <option value="oftalmologia">Oftalmologia</option>
                  </select>
                </div>
              </Row>
              <Row align={"justify"} >
                <div className="col-12">
                  <label for="descricao">Descrição</label>
                  <textarea className="form-control" id="descricao" name="descricao"></textarea>
                </div>
              </Row>
              <Row align={"justify"} >
                <div class="col-12 conteudo">
                  <input type="submit" className="btn btn-primary" value="Enviar" />
                </div>
              </Row> 
            </form>
          </Row>          
        </Col>
        <Col>
          <Row><h3 className="itensNavbar text-success">Agende sua consulta conosco!</h3></Row>
          <Row align={"justify"}>
            <p className="itensNavbar text-justify">Informe seu nome, CPF, a data desejada para a consulta, a especialidade e por fim uma breve descrição sobre sintomas que está sentindo.</p>
          </Row>
        </Col>
      
      </Row>
    </Container>
  )  
}

export default Agendar;