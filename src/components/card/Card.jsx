import './card.css'

// eslint-disable-next-line react/prop-types
export const Card = ({name, title, date}) => {
  return (
    <div className='card'>
        <p>{name}</p>
        <p>{title}</p>
        <p>{date}</p>

    </div>
  )
}
