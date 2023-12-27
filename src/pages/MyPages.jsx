import MyPlantage from "../components/myPlantage/MyPlantage"
import { MyPagesHero } from "../components/mypagesHero/MyPagesHero"
import { Navbar } from "../components/navbar/Navbar"


export const MyPages = () => {
  return (
    <div className="mypages">
        <Navbar/>
        <MyPagesHero/>
        <MyPlantage/>

    </div>
  )
}
