const MoveSelector = ({ onMoveSelected, isLoading, moves }) => {

  return (
    <div className="movesContainer">
      {moves.map((move) => (
        <button
          key={move}
          data-testid={`${move}-button`}
          onClick={() => onMoveSelected(move)}
          disabled={isLoading}
        >
          {move.charAt(0).toUpperCase() + move.slice(1)} {/* Capitalize text */}
        </button>
      ))}
    </div>
  );
};

export default MoveSelector;
