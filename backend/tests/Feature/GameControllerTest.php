<?php

namespace Tests\Feature;

use Tests\TestCase;

class GameControllerTest extends TestCase
{
    /** @test */
    public function it_returns_a_valid_response_for_play()
    {
        $response = $this->postJson('/api/play', ['p2Move' => 'rock']);

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'status',
                     'data' => ['p1Move', 'p2Move', 'winner']
                 ]);
    }

    /** @test */
    public function it_validates_invalid_moves()
    {
        $response = $this->postJson('/api/play', ['p2Move' => 'invalid_move']);

        $response->assertStatus(422);
    }
}
