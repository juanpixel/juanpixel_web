import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Tools } from './components/Tools'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="page-content">
        <Hero />
        <About />
        <Experience />
        <Tools />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
