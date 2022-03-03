import React from 'react';
import gambar1 from '../asets/gambar1.jpg';
import gambar4 from '../asets/gambar4.jpg';
import gambar3 from '../asets/gambar3.jpg';

const Features2 = () => {
  return (
    <div style={{ width: '100vw', marginTop: '15rem' }}>
      <h1 style={{ fontWeight: 'bold', textAlign: 'center', letterSpacing: '1px' }}>
        Whare do you want <span style={{ color: '#406882' }}>to camp ?</span>
      </h1>
      <p style={{ textAlign: 'center', color: '#A7BBC7', fontWeight: '500', marginTop: '20px', letterSpacing: '1px' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Tenetur nulla aliquam eveniet fugit doloremque, quas, <br /> similique porro ipsam,
      </p>

      <div style={{ marginTop: '5rem', padding: '0 10rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <img src={gambar1} alt="" style={{ width: '27rem', borderRadius: '20px' }} />
          <div style={{ width: '19rem', height: '100px', backgroundColor: '#1A374D', margin: '0 auto', color: 'white', transform: 'translateY(-30px)', borderRadius: '10px', padding: '7px 2px' }}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Lake</h5>
            <p style={{ textAlign: 'center', fontSize: '15px' }}>Lorem, ipsum dolor consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <img src={gambar4} alt="" style={{ width: '27rem', borderRadius: '20px' }} />
          <div style={{ width: '19rem', height: '100px', backgroundColor: '#1A374D', margin: '0 auto', color: 'white', transform: 'translateY(-30px)', borderRadius: '10px', padding: '7px 2px' }}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Mount</h5>
            <p style={{ textAlign: 'center', fontSize: '15px' }}>Lorem, ipsum dolor consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <img src={gambar3} alt="" style={{ width: '27rem', borderRadius: '20px' }} />
          <div style={{ width: '19rem', height: '100px', backgroundColor: '#1A374D', margin: '0 auto', color: 'white', transform: 'translateY(-30px)', borderRadius: '10px', padding: '7px 2px' }}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Out Bond</h5>
            <p style={{ textAlign: 'center', fontSize: '15px' }}>Lorem, ipsum dolor consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
