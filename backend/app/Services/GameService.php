<?php

namespace App\Services;

class GameService
{
    /* default moves is rock, paper and scissors
    ** if you add a move you should add 
    ** a corresponding key value pair to winningMove
    ** i.e in $moves = [...$moves, 'thisMove']
    ** then in $winningMoves add ['thisMove'=>'winsToThisMove']
    */
    public array $moves = ['rock', 'paper', 'scissors'];

    private array $winningMoves = [
        'rock' => 'scissors',
        'scissors' => 'paper',
        'paper' => 'rock',
    ];

    public function getMoves()
    {
        return $this->moves;
    }

    public function getRandomMove(): string
    {
        return $this->moves[array_rand($this->moves)];
    }

    public function getWinner(string $p1Move, string $p2Move): string
    {
        if ($p1Move === $p2Move) {
            return 'tie';
        }

        return $this->winningMoves[$p1Move] === $p2Move ? 'player1' : 'player2';
    }
}