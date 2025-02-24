const GameSummary = ({ stats, onReset }) => {
  const totalRounds = stats.player1Wins + stats.player2Wins + stats.ties;
  const player1WinRate = ((stats.player1Wins / totalRounds) * 100).toFixed(2);
  const player2WinRate = ((stats.player2Wins / totalRounds) * 100).toFixed(2);

  return (
    <div>
      <h2>Game Over!</h2>
      <p>Total Rounds: {totalRounds}</p>
      <p>Player 1 Wins: {stats.player1Wins}</p>
      <p>Player 2 Wins: {stats.player2Wins}</p>
      <p>Ties: {stats.ties}</p>
      <p>Player 1 Win Rate: {player1WinRate}%</p>
      <p>Player 2 Win Rate: {player2WinRate}%</p>
      <button onClick={onReset}>Play Again</button>
    </div>
  );
};

export default GameSummary;
