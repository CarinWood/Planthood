import './hero.css'
import seedling from '../../assets/images/seedling.svg'
import dig from '../../assets/images/dig.svg'
import logo from '../../assets/images/logo.svg'

export const Hero = () => {
  return (
    <div className="hero">

        <div className='box-1'>
          <img src={logo} alt='logo' />
        </div>
       
        <div className='right-side'>
          <div className='box-2'>
              <img src={seedling} alt="seedling"/>
          </div>
          <div className='box-3'>
              <img src={dig} alt="dig"/>
          </div>
        </div>
    </div>
  )
}
