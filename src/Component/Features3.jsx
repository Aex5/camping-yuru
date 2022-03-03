import React from 'react';
import { Container } from 'react-bootstrap';
import bonfire from '../asets/bonfire.jpg';

const Features3 = () => {
  return (
    <div style={{ marginTop: '20rem' }}>
      <Container>
        <h1 style={{ fontWeight: 'bold', letterSpacing: '1px' }}>A information by Rin-chan for you!</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '30rem', height: '30rem', background: '#40578b', marginTop: '3rem' }}>
            <img src={bonfire} alt="" style={{ maxWidth: '30rem', transform: 'translate(1rem, 1rem) ' }} />
          </div>
          <div style={{ paddingLeft: '3rem', marginTop: '-7rem' }}>
            <h3 style={{ fontWeight: 'bold' }}>Make a bonfire so easilly with Rin-chan !</h3>
            <p style={{ paddingRight: '15rem', marginTop: '2rem', fontWeight: '500', letterSpacing: '1px', color: '#A7BBC7' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at adipisci saepe facilis eveniet? Nemo, autem omnis? Iusto magni voluptatum harum nobis aliquid laborum eveniet quis consequatur, similique doloribus
              necessitatibus?
            </p>
            <a href="#" style={{ textDecoration: 'none', color: '#406882', fontWeight: 'bold' }}>
              Read More ➡
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features3;
