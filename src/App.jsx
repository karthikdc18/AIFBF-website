import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision';
import Sectors from './components/Sectors';
import Footer from './components/Footer';
import  Contact  from './components/Contact';
import Leadership from './components/Leadership';
import Findus from './components/Findus';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <AboutUs />
      <Sectors />
      <Leadership/>
      <Findus/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;