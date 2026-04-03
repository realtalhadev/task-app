import { useEffect, useState } from "react"
import logo from "../assets/react.svg"

export default function Header(){
  const [theme,settheme] = useState("gOne")

  useEffect(()=>{
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  },[theme])
  return(
    <>
    <header>
        <div className="logo">
            <img src={logo} alt="App logo" />
            <span>Task App</span>
        </div>
    
    <div className="themeSelector">
        <span className={theme === "light"? "light activeTheme":"light"} onClick={()=> settheme("light")}></span>
        <span className={theme === "medium"? "medium activeTheme":"medium"} onClick={()=> settheme("medium")}></span>
        <span className={theme === "dark"? "dark activeTheme":"dark"} onClick={()=> settheme("dark")}></span>
        <span className={theme === "gOne"? "gOne activeTheme":"gOne"} onClick={()=> settheme("gOne")}> </span>
        <span className={theme === "gTwo"? "gTwo activeTheme":"gTwo"} onClick={()=> settheme("gTwo")}></span>
        <span className={theme === "gThree"? "gThree activeTheme":"gThree"}onClick={()=> settheme("gThree")}></span>
    </div>
    </header>
    </>
  )
}