import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Cartao({texto, imagem, titulo, botaoTexto, link, botaoTipo}){
  
  return(    
    <Card style={{ width: '18rem', height:'22rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Title> {titulo} </Card.Title>
      <Card.Text>                  
        {texto}
      </Card.Text>
      <Link style={{ textDecoration: 'none' }} className="text-success" to={link} >
        <Button variant={botaoTipo} > {botaoTexto} </Button>
      </Link>
    </Card>
  )
}

export default Cartao;