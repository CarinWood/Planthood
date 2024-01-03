import './menu.css'

// eslint-disable-next-line react/prop-types
export const Menu = ({toggleMenu}) => {
  return (

    <div className={toggleMenu ? 'menu foldOut' : 'menu'}>
        <ul>
            <li>Planer</li>
            <li>Historik</li>
            <li>Tips</li>
            <li>Logga in</li>
        </ul>
    </div>
  )
}
