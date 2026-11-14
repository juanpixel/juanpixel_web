import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Tools } from './components/Tools'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="portfolio-shell">
      <div className="hero-shell">
        <Navbar />
        <main className="page-content">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Tools />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
