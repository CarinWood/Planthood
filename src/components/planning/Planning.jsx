import { Card } from '../card/Card'
import './planning.css'
import gurka from '../../assets/images/cucumber.avif'

export const Planning = () => {
  return (
    <section className='planning'>
        <h1>Dina planerade planteringar:</h1>
        <Card name={"Rico Coolio"} title={"Gurka"} date="15 april 2024" img={gurka}/>
    </section>
  )
}
