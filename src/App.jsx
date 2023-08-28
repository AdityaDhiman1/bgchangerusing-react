import { useState } from "react"


function App() {
  const [color, setColor] = useState("none")
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
          <div className="flex justify-center flex-wrap gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={() =>setColor("red")}
              className="outline-none px-4  rounded-full py-1 shadow-lg text-white"
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
            onClick={() =>setColor("yellow")}
              className="outline-none px-4  rounded-full py-1 shadow-lg text-white"
              style={{ backgroundColor: "yellow" }}
            >Yello</button>


            <button
            onClick={() =>setColor("green")}
              className="outline-none px-4  rounded-full py-1 shadow-lg text-white"
              style={{ backgroundColor: "green" }}
            >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
