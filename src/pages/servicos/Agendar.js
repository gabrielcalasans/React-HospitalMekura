import {Container, Row, Col} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import { useForm } from 'react-hook-form';


function Agendar() {
  
  var today = new Date();
  var hoje = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  const { register, handleSubmit, watch, formState: {errors} } = useForm();  
  
  const onSubmit = (data) => {
    alert("Consulta Solicitada com Sucesso!\nVerifique os status na aba 'Acompanhar Exame'! ")
    console.log(data);
  }
  
  return (
    <Container>
      <Row>
        <h1 className="logoTexto">Solicitar Exame</h1>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Row>
            <h3 className="text-success itensNavbar">Formulário</h3>
          </Row>
          <Row>
            <form className="text-secondary itensNavbar" onSubmit={handleSubmit(onSubmit)} >
              <Row align={"justify"}>
                <div className="col-12 text-justify" >
                  <label htmlFor="nome">Nome</label>
                  <input className="form-control" name="nome" id="nome" type="text" placeholder="Digite seu nome" { ...register("nome", {required: true, minLength: 3}) } />
                  <div className="form-text text-danger"> {errors.nome && "O nome deve ter tamanho >= 3!" } </div>
                </div>
              </Row>
              <Row align={"justify"} >                
                <div className="col-12 col-md-4 text-justify">
                    <label htmlFor="cpf">CPF</label>
                    <input type="number" className="form-control" name="cpf" id="cpf" { ...register("cpf", {required: true, minLength: 11, maxLength: 11})} /> 
                    <div className="form-text text-danger"> {errors.cpf && "O CPF deve possuir 11 caracteres!" } </div>  
                </div>
                <div className="col-12 col-md-4 text-justify">                 
                  <label htmlFor="data">Data para Consulta</label>
                  <input className="form-control" { ...register("data", {required: true, min: hoje})} type="date" id="data" min={{hoje}} name="data"/>
                  <div className="form-text text-danger"> {errors.data && "Informe um momento no futuro!" } </div>  
                </div>
                <div className="col-12 col-md-4">
                  <label htmlFor="especialidade">Especialidade</label>
                  <select name="especialidade" id="especialidade" className="form-select">
                    <option value="cronica">Doenças Crônicas</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="urologia">Urologia</option>
                    <option value="oftalmologia">Oftalmologia</option>
                  </select>
                </div>
              </Row>
              <Row align={"justify"} >
                <div className="col-12">
                  <label htmlFor="descricao">Descrição</label>
                  <textarea className="form-control" { ...register("descricao", {required: true, minLength: 10})} id="descricao" name="descricao"></textarea>
                  <div className="form-text text-danger"> {errors.descricao && "A descrição deve conter no mínimo 10 caracteres!" } </div>  
                </div>
              </Row>
              <Row align={"justify"} >
                <div className="col-12 conteudo">
                  <input type="submit" className="btn btn-primary" value="Cadastrar" />
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