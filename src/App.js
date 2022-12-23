

import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Seo from './Component/Seo';
import {ThemeProvider } from './Context/Theme';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';


function App() {
  return (
    <>
    <ThemeProvider>

    <Seo/>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/> 

    </ThemeProvider>
    


    </>
  );
}

export default App;
