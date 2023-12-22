import './App.css'
import { Footer } from './components/footer/Footer'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Plantations } from './plantations/Plantations'

function App() {

  return (
    <div className='app'>
      <Hero/>
      <Navbar/>
      <Plantations/>
      <Footer/>
      
    </div>
  )
}

export default App
