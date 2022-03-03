import React from 'react';
import { Carousel } from 'react-bootstrap';
import gambar1 from '../asets/gambar1.jpg';
import gambar2 from '../asets/gambar2.jpg';
import gambar3 from '../asets/gambar3.jpg';

const Jumbotron = () => {
  return (
    <div style={{ marginTop: '-25px' }}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={gambar1} alt="First slide" />
          <Carousel.Caption>
            <h3>Lets camp with us</h3>
            <p>its sound great right hey come on !</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gambar2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Make camp fire easy</h3>
            <p>enjoy with our facilities </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gambar3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Fuji Mount sound great</h3>
            <p>you will get a lot bennefits for joinning with us </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Jumbotron;
