import './myPagesHero.css'
import logo from '../../assets/images/Logo.svg'

export const MyPagesHero = () => {
  return (
    <div className='pages-hero'>
        <img src={logo} alt="logo" className='my-pages-logo' />
        <p>Mina sidor</p>

    </div>
  )
}
