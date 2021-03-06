<?php

use Illuminate\Database\Seeder;
use App\models\Contact;

class ContactsTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return factory(Contact::class, 50)->create();
    }
}
