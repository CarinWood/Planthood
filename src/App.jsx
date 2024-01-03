import './App.css'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { MyPages } from './pages/MyPages'


function App() {



  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mypages" element={<MyPages/>}/>
      </Routes>
    </div>
  )
}

export default App
