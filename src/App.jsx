import './App.css'
import { Earlier } from './components/earlier/Earlier'
import { Footer } from './components/footer/Footer'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Season } from './components/season/Season'
import { Plantations } from './plantations/Plantations'

function App() {

  return (
    <div className='app'>
      <Hero/>
      <Navbar/>
      <Season/>
      <Plantations/>
      <Earlier/>
      <Footer/>
      
    </div>
  )
}

export default App
