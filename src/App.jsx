import { useState } from 'react'
import './App.css'
import AllGuns from './Components/AllGuns/AllGuns'
import Navbar from './Components/Navbar/Navbar'




function App() {
  const [count, setCount] = useState(0);
  const hendleAddToCart = () => {
    setCount(count + 1)
  }


  return (
    <>
      <Navbar count={count}></Navbar>
      <AllGuns hendleAddToCart={hendleAddToCart}></AllGuns>



    </>
  )
}

export default App
