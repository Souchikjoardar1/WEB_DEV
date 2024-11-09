import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [buttonColor] = useState("red");

  const toggleColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        text
      </div>
      <div className="fixed bottom-0 inset-x-0 flex justify-center mb-4">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: buttonColor }}
            onClick={() => toggleColor(buttonColor)}
          >
            Red
          </button>
          <button
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "orange" }}
            onClick={() => toggleColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "yellow" }}
            onClick={() => toggleColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "green" }}
            onClick={() => toggleColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "blue" }}
            onClick={() => toggleColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "indigo" }}
            onClick={() => toggleColor("indigo")}
          >
            Indigo
          </button>
          <button
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "violet" }}
            onClick={() => toggleColor("violet")}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
