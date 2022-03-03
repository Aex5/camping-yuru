import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import gambar4 from '../asets/gambar4.jpg';
import gambar5 from '../asets/gambar5.jpg';
import gambar6 from '../asets/gambar6.jpg';
import gambar7 from '../asets/gambar7.jpg';

const Features = () => {
  return (
    <div style={{}}>
      <Container fluid>
        <Row style={{ display: 'flex' }}>
          <Col style={{ backgroundColor: '#40578b', color: 'white', padding: '90px 20px 20px 50px' }}>
            <h5>Gallery</h5>
            <h1 style={{ fontWeight: 'bold', lineHeight: '60px' }}>
              Discover your <br /> camping with us
            </h1>
            <p style={{ letterSpacing: '1px', paddingRight: '200px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque illo, labore placeat aut minus assumenda sit facilis ex quis enim delectus repellat.</p>
            <Button variant="outline-dark" style={{ backgroundColor: '#0c1729', color: 'white', marginTop: '30px' }}>
              Show More
            </Button>
          </Col>
          <Col>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '4rem 0', gap: '10px', margin: 'auto' }}>
              <img src={gambar4} alt="" style={{ width: '18rem', borderRadius: '10px' }} />
              <img src={gambar5} alt="" style={{ width: '18rem', borderRadius: '10px' }} />
              <img src={gambar6} alt="" style={{ width: '18rem', borderRadius: '10px' }} />
              <img src={gambar7} alt="" style={{ width: '18rem', borderRadius: '10px' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
