import './App.css'
import { Footer } from './components/footer/Footer'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'

function App() {

  return (
    <div className='app'>
      <Hero/>
      <Navbar/>
      <Footer/>
      
    </div>
  )
}

export default App
