import { beforeEach, afterEach, describe, test, expect } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

global.fetch = vi.fn((url, options) => 
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data : {
          p1Move: "rock",
          p2Move: JSON.parse(options.body).player2,
          winner: Math.random() > 0.5 ? "player1" : "player2", 
        }
      }),
  })
);

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() => 
    Promise.resolve({
      json: () =>
        Promise.resolve({
          moves: ["rock","paper","scissors"]
        }),
    })
  ));
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Rock Paper Scissors Game", () => {
  test("disables buttons while waiting for API response", async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByTestId("rock-button")).toBeInTheDocument());

    const rockButton = screen.getByTestId("rock-button");
    const paperButton = screen.getByTestId("paper-button");
    const scissorsButton = screen.getByTestId("scissors-button");

    fireEvent.click(rockButton);
    
    expect(rockButton).toBeDisabled();
    expect(paperButton).toBeDisabled();
    expect(scissorsButton).toBeDisabled();

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    
    expect(rockButton).not.toBeDisabled();
    expect(paperButton).not.toBeDisabled();
    expect(scissorsButton).not.toBeDisabled();

  });
});
