import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GlobalStyle from '../css/GlobalStyle'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills/>
      <Projects />
      <Contact />
      <Newsletter />
    </>
  )
}

export default Home