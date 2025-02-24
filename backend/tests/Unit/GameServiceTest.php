<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Services\GameService;

class GameServiceTest extends TestCase
{
    private GameService $gameService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->gameService = new GameService();
    }

    /** @test */
    public function it_returns_a_valid_random_move()
    {
        $availableMoves = $this->gameService->getMoves();
        $move = $this->gameService->getRandomMove();
        $this->assertContains($move, $availableMoves);
    }

    /** @test */
    public function it_correctly_determines_a_tie()
    {
        $this->assertEquals('tie', $this->gameService->getWinner('rock', 'rock'));
    }

    /** @test */
    public function it_correctly_determines_player1_as_winner()
    {
        $this->assertEquals('player1', $this->gameService->getWinner('rock', 'scissors'));
    }

    /** @test */
    public function it_correctly_determines_player2_as_winner()
    {
        $this->assertEquals('player2', $this->gameService->getWinner('rock', 'paper'));
    }
}
