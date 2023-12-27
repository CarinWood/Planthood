import './footer.css'
import logo from '../../assets/images/Logo.svg'
import { MdOutlinePhone } from "react-icons/md";
import { PiEnvelope } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer>
        <div className='container'>
                <div className='black'>
                        <p className='footer-text'>Vi hörs!</p>
                        <div className='shade'></div>
                        <MdOutlinePhone className='phone-icon'/>
                        <PiEnvelope className='envelope-icon'/>
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
