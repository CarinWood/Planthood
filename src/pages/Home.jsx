import { Earlier } from "../components/earlier/Earlier"
import { Footer } from "../components/footer/Footer"
import { Hero } from "../components/hero/Hero"
import { Navbar } from "../components/navbar/Navbar"
import { Season } from "../components/season/Season"
import { Plantations } from "../plantations/Plantations"

export const Home = () => {
  return (
    <> 
        <Hero/>
        <Navbar item={"Logga in"}/>
        <Season/>
        <Plantations/>
        <Earlier/>
        <Footer/>
    </>
  )
}
