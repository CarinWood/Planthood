import './navbar.css'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Navbar = ({item}) => {
  const navigate = useNavigate()


  const handleClick= () => {
    navigate("/mypages")
  }


  return (
    <nav>
        <ul>
            <li>Planer</li>
            <li>Historik</li>
            <li>Tips</li>
            <li onClick={handleClick}>
              {item}
            </li>
        </ul>
    </nav>
  )
}
