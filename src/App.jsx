import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to= '/counter'>counter</Link>
      <br></br>
      <Link to= '/todo'>todo</Link>
      <br />
      <Link to='/counterz'>counterz</Link>
      
    </>
  )
}

export default App
