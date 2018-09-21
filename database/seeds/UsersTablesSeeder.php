<?php

use Illuminate\Database\Seeder;
use App\models\User;

class UsersTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return factory(User::class, 50)->create();
    }
}
