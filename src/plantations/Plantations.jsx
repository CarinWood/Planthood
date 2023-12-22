import { Card } from '../components/card/Card'
import { Plants } from '../data/Plants'
import './plantations.css'

export const Plantations = () => {
  return (
    <div className="plantations">
        <p className='headline'>Våra planerade planteringar:</p>
        <div className='plant-grid'>
        {Plants.map((item) => {
            return <Card {...item} key={item.id}/>
        })}
        </div>

    </div>
  )
}
