import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GameSummary from "./GameSummary";

test("displays correct game summary", () => {
  const stats = { player1Wins: 3, player2Wins: 5, ties: 2 };
  render(<GameSummary stats={stats} />);

  expect(screen.getByText("Player 1 Wins: 3")).toBeInTheDocument();
  expect(screen.getByText("Player 2 Wins: 5")).toBeInTheDocument();
  expect(screen.getByText("Ties: 2")).toBeInTheDocument();
});
