import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainSection } from './components/navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import AboutUs from './components/About/about';
function App() {
  return (
    <div className="App">
      <MainSection />
    
      <Banner />

     <AboutUs />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
