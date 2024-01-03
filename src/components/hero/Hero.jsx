import './hero.css'
import seedling from '../../assets/images/seedling.svg'
import dig from '../../assets/images/dig.svg'
import logo from '../../assets/images/logo.svg'
import holding from '../../assets/images/holding.avif'

// eslint-disable-next-line react/prop-types
export const Hero = ({clickOnHamburger}) => {
  return (
    <div className="hero">
      <div className='menu-box' onClick={()=>clickOnHamburger()}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>

        <div className='box-1'>
          <img src={logo} alt='logo' className='logo'/>
          <img src={holding} alt="hand" className='hand'/>
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
