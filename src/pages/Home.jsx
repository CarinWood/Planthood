import { useState } from "react"
import { Earlier } from "../components/earlier/Earlier"
import { Footer } from "../components/footer/Footer"
import { Hero } from "../components/hero/Hero"
import { Menu } from "../components/menu/Menu"
import { Navbar } from "../components/navbar/Navbar"
import { Season } from "../components/season/Season"
import { Plantations } from "../plantations/Plantations"

export const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const clickOnHamburger = () => {
  setToggleMenu(!toggleMenu)
  }
  return (
    <> 
        <Menu toggleMenu={toggleMenu}/>
        <Hero clickOnHamburger={clickOnHamburger}/>
        <Navbar item={"Logga in"}/>
        <Season/>
        <Plantations/>
        <Earlier/>
        <Footer/>
    </>
  )
}
