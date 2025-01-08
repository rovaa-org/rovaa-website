import { useState } from 'react'
import './App.css'
import {Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Rovaa</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
  
      </div>
      
    </>
  )
}

export default App
