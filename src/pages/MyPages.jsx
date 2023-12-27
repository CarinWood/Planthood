import { MyPageFooter } from "../components/myPageFooter/MyPageFooter"
import MyPlantage from "../components/myPlantage/MyPlantage"
import { MyPagesHero } from "../components/mypagesHero/MyPagesHero"
import { Navbar } from "../components/navbar/Navbar"
import { Planning } from "../components/planning/Planning"


export const MyPages = () => {
  return (
    <div className="mypages">
        <Navbar item={'Logga ut'} />
        <MyPagesHero/>
        <MyPlantage/>
        <Planning/>
        <MyPageFooter/>

    </div>
  )
}
