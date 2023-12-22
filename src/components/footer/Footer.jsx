import './footer.css'
import logo from '../../assets/images/Logo.svg'

export const Footer = () => {
  return (
    <footer>
        <div className='container'>
                <div className='black'>
                        <p className='footer-text'>Vi hörs!</p>
                        <div className='shade'></div>
                        <p className='phone'>0701-234567</p>
                        <p className='email'>mail@mail.se</p>
                </div>

                <div className='white'>
                    <img src={logo} alt="logo" />
                </div>
        </div>
        <div id='to-top'>
                <p>Till toppen av sidan</p>
        </div>
    </footer>
  )
}
