<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\GameService;

class GameController extends Controller
{
    private GameService $gameService;

    public function __construct(GameService $gameService)
    {
        $this->gameService = $gameService;
    }

    public function play(Request $request)
    {

        $moves = implode(',', $this->gameService->getMoves());
        $request->validate([
            'playerMove' => "required|string|in:$moves"
        ]);

        $p1Move = $this->gameService->getRandomMove();
        $p2Move = $request->input('playerMove');
        $winner = $this->gameService->getWinner($p1Move, $p2Move);

        return response()->json([
            'status' => 'success',
            'data' => [
                'p1Move' => $p1Move,
                'p2Move' => $p2Move,
                'winner' => $winner,
            ]
        ], 200);
    }

    public function moves()
    {
        return response()->json([
            'moves' => $this->gameService->getMoves()
        ]);
    }
}