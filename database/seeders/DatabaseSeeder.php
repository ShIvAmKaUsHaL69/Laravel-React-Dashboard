<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Shivam',
            'email' => 'shivam@example.com',
            'password' => bcrypt('Shivam1234'),
            'email_verified_at' => time(),
        ]);
    }
}
