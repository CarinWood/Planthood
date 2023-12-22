import './card.css'
import plant from '../../assets/images/plant.svg'

// eslint-disable-next-line react/prop-types
export const Card = ({name, title, date, img}) => {
  return (
    <div className='card'>
        <div className='image-container'>
            <img src={plant} alt="plant" className='plant-logo'/>
            <img src={img} alt={title} className='plant-image'/>
        </div>
        <p className='card-title'>{title}</p>
        <p>{name}</p>
        <p>{date}</p>

    </div>
  )
}
