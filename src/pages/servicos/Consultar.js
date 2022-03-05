import {Container, Row, Col, Modal, Button, Card} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useState} from 'react';

function Consultar() {
  
  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  
  const [modalShow, setModalShow] = useState(false);
  const [consultas, setConsultas] = useState([]);
  
  const onSubmit = (data) => {    
    //console.log(data);
    
    axios.get('http://localhost:80/api/react/api-hospital-mekura/', {
      params: {
        cpf: data.cpf,
        dia: data.data
      }
    })
    .then(function(response) {
      //console.log(response.data);
      setConsultas(response.data);
      setModalShow(true);
    }); 
  }
  
  function ResultadoConsulta(props) {
    return(
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success logoTexto">
            Consulta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="conteudo">
          {consultas.map((consulta, key) => 
                         <Card className="itensNavbar cartaoConsulta shadow-sm" variant="top">
                           <Card.Text>
                            <Container style={{fontSize: 14}}>
                              <Row align={"left"}>
                                <Col sm={12} md={6}>
                                  <b>Nome:</b> {consulta.nome}
                                </Col>
                                <Col sm={12} md={6}>
                                  <b>CPF:</b> {consulta.cpf}
                                </Col> 
                              </Row>
                              <Row align={"left"}>
                                <Col sm={12} md={6}>
                                  <b>Dia da Consulta:</b> {consulta.data}
                                </Col>
                                <Col sm={12} md={6}>
                                  <b>Agendado:</b> {consulta.criacao}
                                </Col>
                              </Row>
                              <Row align={"left"}>
                                <Col sm={12} md={6}>
                                  <b>Área: </b>{consulta.especialidade}
                                </Col>
                                <Col sm={12} md={6}>
                                  <b>Status: </b>{consulta.status}
                                </Col>
                              </Row>
                              <Row align={"left"}>
                                <Col sm={12}>
                                  <b>Descrição:</b>
                                </Col>
                                <Col sm={12}>
                                  {consulta.descricao}
                                </Col>
                              </Row>
                            </Container> 
                          </Card.Text>
                         </Card>
                        )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"danger"} onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>        
      </Modal>
        
    )
  }
  
  
  return (
    <Container>
      <Row>
        <h1 className="logoTexto">Acompanhar Exame</h1>
      </Row>
      <Row>
        <Col sm={12} md={6}>      
          <Row>
            <h3 className="itensNavbar text-success">Acompanhe a consulta</h3>
          </Row>
          <Row align={"justify"}>
            <p className="itensNavbar">Informe seu CPF e a data para identificarmos o status da sua consulta.</p>
          </Row>
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <h3 className="itensNavbar text-success">Formulário</h3>
          </Row>
          <Row align={"justify"}>
            <form id="consultar" className="text-secondary itensNavbar" onSubmit={handleSubmit(onSubmit)} >
              <Row className={"justify"}>
                <div className="col-12 col-md-8">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="number" className="form-control"
                    name="cpf" id="cpf"
                    { ...register("cpf", {required: true, minLength: 11, maxLength: 11})} />
                    <div className="form-text text-danger"> {errors.cpf && "O CPF deve possuir 11 caracteres!" } </div>
                </div>
                <div className="col-12 col-md-4 text-justify">                 
                  <label htmlFor="data">Data para Consulta</label>
                  <input
                  className="form-control"
                  { ...register("data", {required: true})}
                  type="date" id="data" name="data"/>
                  <div className="form-text text-danger"> {errors.data && "Obrigatório" } </div>  
                </div>
              </Row>
              <Row align={"right"}>
                <div className="col-12 conteudo">
                  <input className="btn btn-primary" type="submit" value="Checar" />
                </div>
              </Row>              
            </form>
          </Row>
        </Col>
      </Row>
      
      <ResultadoConsulta show={modalShow} onHide={() => setModalShow(false)} />
      
    </Container>
  )  
}

export default Consultar;