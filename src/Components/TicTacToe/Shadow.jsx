import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./Shadow.css";

// Updated patterns with correct file paths
const patterns = [
  {
    original: "/images/original1.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 0, // Change to the correct shadow index for original1
  },
  {
    original: "/images/original2.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 1, // Change to the correct shadow index for original2
  },
  {
    original: "/images/original3.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 2, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original4.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 3, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original5.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 4, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original6.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 5, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original7.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 6, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original8.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 7, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original9.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 8, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original3.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 2, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original3.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 2, // Change to the correct shadow index for original3
  },
  {
    original: "/images/original3.png",
    shadows: [
      "/images/shadow1.png",
      "/images/shadow2.png",
      "/images/shadow3.png",
      "/images/shadow4.png",
      "/images/shadow5.png",
      "/images/shadow6.png",
      "/images/shadow7.png",
      "/images/shadow8.png",
      "/images/shadow9.png",
    ],
    correctIndex: 2, // Change to the correct shadow index for original3
  },
  // Repeat this structure for original4.png to original9.png
];

const ShadowGame = () => {
  const [currentPattern, setCurrentPattern] = useState(0);
  const [score, setScore] = useState(100);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [feed, setFeed] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [completedPatterns, setCompletedPatterns] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = (index) => {
    setIsDisabled(true);
    const isCorrect = index === patterns[currentPattern].correctIndex;
    setFeed(isCorrect ? "You are correct!" : "You are wrong!");
    if (!isCorrect) setScore((prevScore) => prevScore - 10);

    setTimeout(() => {
      setFeed("");
      setIsDisabled(false);
      setCompletedPatterns((prev) => [...prev, currentPattern + 1]);
      if (currentPattern < patterns.length - 1) {
        setCurrentPattern((prev) => prev + 1);
      } else {
        alert(`Game over! Final Score: ${score}`);
      }
    }, 1500);
  };

  const handleSubmit = () => {
    const data = [
      {
        "Attention_Score": score,
        "Time Elapsed (seconds)": timeElapsed,
        "Patterns Completed": completedPatterns.length,
        "Gaze_Shifts_Count":0,
        "Fixation_Duration (s)":0.00,
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Shadow Game Results");
    XLSX.writeFile(workbook, "Shadow_Game_Results.xlsx");
  };

  const { original, shadows } = patterns[currentPattern];

  return (
    <div className="shadow-game">
      <div className="header">
        <h1>Shadow Matching Game</h1>
        <div>Score: {score}</div>
        <div>Time Elapsed: {timeElapsed} seconds</div>
      </div>
      {feed && <div className="feed">{feed}</div>}

      <div className="game-container">
        <div className="game-area">
          <img src={original} alt="Original Object" className="original-image" />
          <div className="shadow-grid">
            {shadows.map((shadow, index) => (
              <button
                key={index}
                className="shadow-button"
                onClick={() => handleClick(index)}
                disabled={isDisabled}
              >
                <img src={shadow} alt={`Shadow ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="progress-container">
          <div className="progress">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="progress-item">
                <span>{i + 1}</span>
                {completedPatterns.includes(i + 1) && <span> - Done </span>}
              </div>
            ))}
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit and Download Results
          </button>
        </div>
      </div>

      {feed && <div className="feed">{feed}</div>}
    </div>
  );
};

export default ShadowGame;