const GameBoard = ({ rounds }) => {
  return (
    <div>
      <h2>Game Rounds</h2>
      {rounds.map((round, index) => (
        <p key={index}>
          Round {index + 1}: Player 1 ({round.p1Move}) vs Player 2 ({round.p2Move}) - Winner: {round.winner}
        </p>
      ))}
    </div>
  );
};

export default GameBoard;