import { useEffect, useState } from "react";
import MoveSelector from "./components/MoveSelector";
import GameBoard from "./components/GameBoard";
import GameSummary from "./components/GameSummary/GameSummary";
import './App.css'

const API_URL = "http://localhost/api/play";

const App = () => {
  const [rounds, setRounds] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [moves, setMoves] = useState([]);

  // Function to play a round
  const playRound = async (playerMove) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playerMove: playerMove }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const result = await response.json();
      const updatedRounds = [...rounds, result.data];

      setRounds(updatedRounds);

      if (updatedRounds.length === 10) {
        setGameOver(true);
      }
    } catch (error) {
      console.error("Error playing round:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStats = () => {
    let player1Wins = 0, player2Wins = 0, ties = 0;

    rounds.forEach((round) => {
      if (round.winner === "player1") player1Wins++;
      else if (round.winner === "player2") player2Wins++;
      else ties++;
    });

    return {
      totalRounds: rounds.length,
      player1Wins,
      player2Wins,
      ties,
      player1WinPercentage: ((player1Wins / rounds.length) * 100).toFixed(2),
      player2WinPercentage: ((player2Wins / rounds.length) * 100).toFixed(2),
    };
  };

  const restartGame = () => {
    setRounds([]);
    setGameOver(false);
  };

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const response = await fetch("http://localhost/api/moves");
        const data = await response.json();
        setMoves(data.moves);
      } catch (error) {
        console.error("Error fetching moves:", error);
      } finally {
        setIsPageLoading(false);
      }
    };

    fetchMoves();
  }, []);

  if (isPageLoading) {
    return <div data-testid="loading">Loading moves...</div>;
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      {gameOver ? (
        <>
          <GameSummary stats={getStats()} onReset={restartGame} />
        </>
      ) : (
        <>
          <MoveSelector onMoveSelected={playRound} isLoading={isLoading} moves={moves} />
          <GameBoard rounds={rounds} />
        </>
      )}
    </div>
  );
};

export default App;
