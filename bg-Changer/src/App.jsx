import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full "></div>
      style={{ backgroundColor: color }}
      <div className="fixed ">text</div>
    </>
  )
}

export default App
