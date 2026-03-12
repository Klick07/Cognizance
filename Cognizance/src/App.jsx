import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)]">
      <Login/> 
    </div> 
    </>
  )
}

export default App
