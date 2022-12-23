
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Seo from './Component/Seo';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';


function App() {




  return (
    <>
    <Seo/>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    {/*
    <Projects/>
    <Contact/>
    <Footer/> */}
    </>
  );
}

export default App;
