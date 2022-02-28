import {Carousel} from 'react-bootstrap';

import fachada from '../images/carousel/fachada.jpg';
import leitos from '../images/carousel/leitos.jpg';
import ambulancias from '../images/carousel/ambulancias.jpg';

import {GiHealthCapsule, GiAmbulance} from 'react-icons/gi';
import {FaBed} from 'react-icons/fa';

function Slider() {
  
  return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fachada}
            alt="First slide"
            width="550"
            height="450"
          />

          <Carousel.Caption className="carouselCaption">                  
            <h3 style={{fontSize: 36}} className="itensNavbar" >Hospital Mekura</h3>
            <p style={{fontSize: 20}} className="text-light logoTexto">  O hospital que te cura! <GiHealthCapsule /></p> 
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={leitos}
            alt="First slide"
            width="550"
            height="450"
          />

          <Carousel.Caption className="carouselCaption">
            <h3 className="itensNavbar" >Leitos modernos <FaBed /> </h3>
            <p style={{fontSize: 20}} className="text-light logoTexto">Equipamentos de última geração! </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ambulancias}
            alt="First slide"
            width="550"
            height="450"
          />

          <Carousel.Caption className="carouselCaption">
            <h3 className="itensNavbar" >Socorro rápido e eficaz <GiAmbulance /> </h3>
            <p style={{fontSize: 20}} className="text-light logoTexto">Nossa frota de ambulâncias está pronta para atender em qualquer lugar do mundo!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
         
  )  
}

export default Slider;