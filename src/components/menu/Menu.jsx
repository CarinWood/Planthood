import './menu.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Menu = ({toggleMenu}) => {
  return (

    <div className={toggleMenu ? 'menu foldOut' : 'menu'}>
        <ul>
            <li>Planer</li>
            <li>Historik</li>
            <li>Tips</li>
            <Link to="/mypages"><li>Logga in</li></Link>
        </ul>
    </div>
  )
}
