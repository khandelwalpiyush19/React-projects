 import { useState,useEffect } from 'react'
import './App.css'

function App() { 
const[toggle, setToggle] = useState("Dark")
const [theme, setTheme] = useState('Dark')

useEffect(() => {
  if(toggle === "Dark"){
    setToggle('Dark')
    setTheme('Dark')
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
  else{
    setToggle('Light')
    setTheme('Light')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
  return () => {
     
      };
}, [ ]);




  return (
    <>
      <h2>Theme Switcher</h2>
      <button type='button' value={toggle} onClick={(e) => setToggle(e.target.value) }>
        Dark
      </button>
    </>
  )
}

export default App
