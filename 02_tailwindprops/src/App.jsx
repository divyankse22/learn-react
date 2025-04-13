import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 p-4 mb-4 rounded-xl text-white text-center text-2xl font-bold'>
        Divyank Srivastava
      </h1>

      {/* Flex container for cards */}
      <div className="flex gap-6 justify-center flex-wrap">
        <Card
          name="Virat Kohli"
          image="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQa8HIBFrNwaUdPwbghe_eSCqIkiZ6jvmUHBuv2RWyLbLqyOGK3E44SP5BwVivu7LAjBIxAts7UTTTtkl4"
        />
        <Card
          name="Donald Trump"
          image="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSdsrvUs2jyc0BwI1KFoQIaSa9jjmBCSQGLjCdZUM2_skS-lUnNC7XIdyPA_BiAZyYzLjimxYeJyw-m9mo"
        />
        {/* Add more <Card />s here as needed */}
      </div>
    </>
  )
}

export default App
