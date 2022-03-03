import React from 'react';
import logo from '../asets/logo.png';

const Footer = () => {
  return (
    <div style={{ width: '100vw', height: '20rem', backgroundColor: '#1A374D', marginTop: 'rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15rem' }}>
      <div style={{ width: '25rem' }}>
        <img src={logo} alt="" style={{ width: '18rem' }} />
        <p style={{ color: 'white', letterSpacing: '1px', marginTop: '1rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit commodi corporis exercitationem ad perferendis cupiditate delectus impedit soluta distinctio.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', letterSpacing: '1px' }}>
        <div style={{ color: 'white' }}>
          <h2 style={{ marginBottom: '1rem' }}>Addres</h2>
          <p>lorem ipsum Street, Pati, Central Java </p>
        </div>
        <div style={{ color: 'white' }}>
          <h2 style={{ marginBottom: '1rem' }}>Contact</h2>
          <p>+6285941927516</p>
          <p>argaaditya477@gmail.com</p>
        </div>
        <div style={{ color: 'white' }}>
          <p>
            {' '}
            <br />
          </p>
          <p>Terms of use</p>
          <p>privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
