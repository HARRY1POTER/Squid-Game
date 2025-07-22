import React, { useState, useEffect } from "react";

const RedLightGreenLight = () => {
  const [currentLight, setCurrentLight] = useState("green");
  const [position, setPosition] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Press Enter to move");
  const [startGame, setStartGame] = useState(false);

  const step = 20; // Movement increment
  const finishLine = 760; // Finish line position
  const gameAreaWidth = 800; // Width of the game area

  const switchLight = () => {
    if (gameOver) return;
    // Randomly switch between red and green light
    const newLight = Math.random() < 0.5 ? "green" : "red";
    setCurrentLight(newLight);
  };

  const handleKeyPress = (e) => {
    if (gameOver || !startGame) return;

    if (
      e.code === "Enter" &&
      currentLight === "green" &&
      position < finishLine
    ) {
      // Move the player when green light is on
      setPosition((prevPosition) => {
        const newPosition = prevPosition + step;
        if (newPosition >= finishLine) {
          setMessage("🎉 You Win!");
          setGameOver(true);
          return finishLine;
        }
        return newPosition;
      });
    } else if (e.code === "Enter" && currentLight === "red") {
      // Game over if the player moves during red light
      setMessage("❌ You moved on RED! Game Over.");
      setGameOver(true);
    }
  };

  // Start the game after the page loads or button click
  const startGameHandler = () => {
    setStartGame(true);
    setPosition(0);
    setGameOver(false);
    setMessage("Press Enter to move");
    setCurrentLight("green");
    setInterval(switchLight, 2000); // Switch light every 2 seconds
  };

  // Event listener for keydown (to move player with Enter key)
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentLight, gameOver, position, startGame]);

  return (
    <div className="game-container">
      <h2>🚦 Red Light, Green Light</h2>
      <div id="light" className={currentLight}>
        {currentLight === "green" ? "GREEN LIGHT" : "RED LIGHT"}
      </div>

      {/* Game area */}
      <div
        id="game"
        style={{
          width: `${gameAreaWidth}px`,
          height: "150px",
          margin: "40px auto",
          position: "relative",
          background: "white",
          border: "2px solid #333",
        }}
      >
        {/* Player */}
        <div
          id="player"
          style={{
            width: "40px",
            height: "40px",
            background: "blue",
            position: "absolute",
            top: "55px",
            left: `${position}px`,
            borderRadius: "5px",
          }}
        ></div>

        {/* Finish line */}
        <div
          id="finishLine"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            height: "100%",
            width: "10px",
            background: "black",
          }}
        ></div>
      </div>

      {/* Message */}
      <div id="message">{message}</div>

      {/* Start Button */}
      {!startGame && (
        <button
          onClick={startGameHandler}
          className="start-button"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "#ff66b2",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default RedLightGreenLight;
