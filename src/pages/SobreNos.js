import {Container, Row, Col} from 'react-bootstrap';
import {FaReact, FaPhp} from 'react-icons/fa';
import {BsFillBootstrapFill} from 'react-icons/bs';
import {SiMysql} from 'react-icons/si';

function Sobre(){
  return(
    <div> 
      <Container>
        <Row>
          <h1 className="logoTexto">História, Missão e Valores</h1>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <Row>
              <Col align="left">
                <h3 className="logoTexto text-success">História</h3>
              </Col>              
            </Row>
            <Row>
              <Col  align="justify">
                 <p className="itensNavbar  text-secondary">O Hospital Mekura é um hospital fictício, portanto não possui história real. </p>
                <p className="itensNavbar  text-secondary">Entretanto, falando como criador, posso classificar como motivação da existência desse projeto a necessidade de ter algo que demonstre meus conhecimentos em React e Bootstrap. </p>
              </Col>             
            </Row>
          </Col>
          <Col sm={12} md={4}>
            <Row >
              <Col align="center" >
                <h3 className="logoTexto text-success">Missão</h3>
              </Col>              
            </Row>
            <Row align="justify" >
              <Col>
                <p className="itensNavbar  text-secondary">A principal missão do Hospital Mekura é o exercício de tecnologias como <b>React e Bootstrap</b>. É um projeto que tem como finalidade compor um "portfólio" e demonstrar meu padrão de programação, assim como a organização e os métodos dos quais eu tenho conhecimento. </p>
                <p className="itensNavbar  text-secondary">Além do FrontEnd, o projeto também trabalha com banco de dados, o escolhido foi MySQL para utilizar PHP como backend. Essa escolha foi motivada principalmente por se tratarem de tecnologias pelas quais tenho mais familiaridade, mas também gostaria de entender como funciona a integração de diferentes linguagens, para que não usasse apenas JavaScript.</p>
              </Col>              
            </Row>
          </Col>
          <Col sm={12} md={4}>
            <Row >
              <Col align="right" >
                <h3 className="logoTexto text-success">Valores</h3>
              </Col>              
            </Row>
            <Row align="justify" >
              <Col>
                <p className="itensNavbar text-secondary">O projeto sustenta-se sobre o <b>React</b>, utilizando também o <b>Bootstrap</b>, <b>Php</b> e <b>MySQL</b>. Os pacotes utilizados foram React-Bootstrap, React-Router, React-Icons e Axios</p>
                <p style={{fontSize: 36}} className="text-success text-center"> <FaReact /> <BsFillBootstrapFill /> <FaPhp /> <SiMysql /> </p>
              </Col>              
            </Row>
          </Col>
        </Row>
      </Container>    
    </div>
    
  )
}

export default Sobre;