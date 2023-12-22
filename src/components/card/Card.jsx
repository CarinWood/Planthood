import './card.css'

// eslint-disable-next-line react/prop-types
export const Card = ({name, title, date, img}) => {
  return (
    <div className='card'>
        <img src={img} alt="title" className='plant-img'/>
        <p>{name}</p>
        <p>{title}</p>
        <p>{date}</p>

    </div>
  )
}
