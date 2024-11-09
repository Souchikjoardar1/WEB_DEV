import { useState, useEffect } from "react";

function App() {
  const [activeColor, setActiveColor] = useState(null);
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState('Click "Start Game" to begin');
  const [showRules, setShowRules] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [colorCount, setColorCount] = useState({});
  const [sequenceLength, setSequenceLength] = useState(2);

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  const toggleColor = (color) => {
    setActiveColor((prevColor) => (prevColor === color ? null : color));
    document.body.style.backgroundColor = color;
    if (gameStarted) {
      setUserInput([...userInput, color]);
      setColorCount((prevCount) => ({
        ...prevCount,
        [color]: (prevCount[color] || 0) + 1,
      }));
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setMessage("Watch the sequence");
    setResultMessage("");
    const newSequence = generateSequence(sequenceLength);
    setSequence(newSequence);
    setUserInput([]);
    setColorCount({});
    showSequence(newSequence);
  };

  const generateSequence = (length) => {
    const newSequence = [];
    for (let i = 0; i < length; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      newSequence.push(randomColor);
    }
    return newSequence;
  };

  const showSequence = (sequence) => {
    sequence.forEach((color, index) => {
      setTimeout(() => {
        setActiveColor(color);
        document.body.style.backgroundColor = color;
        setTimeout(() => {
          setActiveColor(null);
          document.body.style.backgroundColor = "white";
          if (index === sequence.length - 1) {
            setMessage("Now it's your turn");
          }
        }, 500);
      }, index * 1000);
    });
  };

  useEffect(() => {
    if (userInput.length === sequence.length && gameStarted) {
      if (JSON.stringify(userInput) === JSON.stringify(sequence)) {
        setResultMessage("YOU WIN!");
      } else {
        setResultMessage("YOU LOSE!");
      }
      setGameStarted(false);
      document.body.style.backgroundColor = "white";
      setTimeout(() => {
        setShowPrompt(true);
      }, 2000);
    }
  }, [userInput, sequence, gameStarted]);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  const handleRestart = (restart) => {
    setShowPrompt(false);
    if (restart) {
      setSequenceLength((prevLength) => Math.min(prevLength + 2, 4));
      startGame();
    } else {
      setMessage("Game Over");
    }
  };

  return (
    <div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {message}
      </div>
      <div className="fixed bottom-0 inset-x-0 flex justify-center mb-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2">
          <div
            className="flex justify-center items-center p-4 rounded-lg"
            style={{
              background:
                "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
            }}
          >
            <button
              onClick={startGame}
              className="outline-none px-4 py-2 mx-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "black", minWidth: "80px" }}
            >
              Start Game
            </button>
            <button
              onClick={toggleRules}
              className="outline-none px-4 py-2 mx-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "gray", minWidth: "80px" }}
            >
              Show Rules
            </button>
            {colors.map((color) => (
              <button
                key={color}
                className={`outline-none px-4 py-2 mx-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${
                  activeColor === color ? "opacity-50" : ""
                }`}
                style={{ backgroundColor: color, minWidth: "80px" }}
                onClick={() => toggleColor(color)}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
                {colorCount[color] > 1 && (
                  <span className="bubble">{colorCount[color]}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {showRules && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Game Rules</h2>
            <div className="rules-container">
              <p className="rule">1. Click &quot;Start Game&quot; to begin.</p>
              <p className="rule">2. Watch the sequence of colors.</p>
              <p className="rule">3. Click the buttons in the same order.</p>
              <p className="rule">4. Match the sequence to win!</p>
            </div>
            <button
              onClick={toggleRules}
              className="outline-none px-4 py-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "black" }}
            >
              OK
            </button>
          </div>
        </div>
      )}
      {resultMessage && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="flash-message text-4xl font-bold">
            {resultMessage}
          </div>
        </div>
      )}
      {showPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Do you want to restart the game?</h2>
            <button
              onClick={() => handleRestart(true)}
              className="outline-none px-4 py-2 mx-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "green" }}
            >
              Yes
            </button>
            <button
              onClick={() => handleRestart(false)}
              className="outline-none px-4 py-2 mx-2 rounded-full text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "red" }}
            >
              No
            </button>
          </div>
        </div>
      )}
      <style>{`
        .rules-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .rule {
          animation: fall 1s ease-in-out forwards;
        }
        .rule:nth-child(1) {
          animation-delay: 0s;
        }
        .rule:nth-child(2) {
          animation-delay: 0.5s;
        }
        .rule:nth-child(3) {
          animation-delay: 1s;
        }
        .rule:nth-child(4) {
          animation-delay: 1.5s;
        }
        @keyframes fall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .flash-message {
          animation: flash 1s infinite;
        }
        @keyframes flash {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .bubble {
          position: absolute;
          top: -10px;
          right: -10px;
          background-color: white;
          color: black;
          border-radius: 50%;
          padding: 5px 10px;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}

export default App;
