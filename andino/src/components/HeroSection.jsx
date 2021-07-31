import React from 'react';
import { useState } from 'react';
import Machu from '../images/machu-picchu.jpg';
import Cocas from '../images/cocas.jpg';

import { 
  Row,
  Col, 
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const items = [
  {
    src: Machu
  },

  {
    src: Cocas 
  }
  
];

export default function HeroSection(props) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="830" height="340"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container style={{marginTop:'7.2rem'}}>
      
      <Row style={{width:"98.5%"}}>
        <p className="breadCrumb">Inicio</p>
      </Row>

      <Row>
        <Col sm={8} style={{padding:"0",marginRight:"-18px"}}>
            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Col>
        <Col sm={4}>
          <Row className="zone-form">
            <p>
              Para consultas de los documentos electrónicos de nuestros clientes
            </p>
            <Button style={{width:'50%', height:'2.5rem', 
                           margin:'0 auto', marginTop:'-50px',
                           fontSize:'20px', background:'#030e3c',}}
            >Consulta aqui</Button>
          </Row>
        
        </Col>
      </Row>
       
    </Container>

 
  );

}


/* THIS IS A CHANGE */