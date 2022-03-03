import Jumbotron from './Component/Jumbotron';
import NavbarComponent from './Component/NavbarComponent';
import { Container } from 'react-bootstrap';
import Features from './Component/Features';
import Features2 from './Component/Features2';
import Features3 from './Component/Features3';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <NavbarComponent />;
      <Jumbotron />
      <Features />
      <Features2 />
      <Features3 />
      <Footer />
    </div>
  );
}

export default App;
