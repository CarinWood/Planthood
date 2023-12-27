import './myPlantage.css'

const MyPlantage = () => {
  return (
    <section className='my-plantage'>
        <h1>Lägg till ny plantering:</h1>
        <form>
            <label htmlFor='planta' className='plant-label'>Planta:</label>
            <input 
                id="planta"
                name="planta"
            />
            <label htmlFor='datum' className='date-label'>Datum:</label>
            <input 
                id="datum"
                name="datum"
            />
        </form>
        <button className='add-btn'>Lägg till</button>
    </section>
  )
}

export default MyPlantage