import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/UpdatedResume/Header';
import About from './components/UpdatedResume/About';
import Experience from './components/UpdatedResume/Experience';
import Projects from './components/UpdatedResume/Projects';
import Contact from './components/UpdatedResume/Contact';
import HeroSection from './components/UpdatedResume/HeroSection';
import ArchiveProjects from './components/UpdatedResume/ArchieveProjects';
import Footer from './components/UpdatedResume/Footer';
import Lenis from 'lenis';
import ContactLogos from './components/UpdatedResume/ContactLogos';

const App = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });
  return (
    <div className='bg-[#0A192F] w-[100%]'>
      <BrowserRouter>

        <Header />
        <div className='flex'>
          <div className='hidden md:block'>
            <ContactLogos />
          </div>
          <div className='w-[100%]'> 
            <Routes>
            <Route path='/' element={
              <>
                <HeroSection />
                <div id='about'><About /></div>
                <div id='experience'><Experience /></div>
                <div id='work'><Projects /></div>
                <div id='contact'><Contact /></div>
              </>
            } />

            <Route path='/archive-projects' element={<ArchiveProjects />} />
          </Routes></div>
        </div>

        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default App;
