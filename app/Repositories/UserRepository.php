<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Contracts\UserInterface;
use File;
use Redirect;

class UserRepository extends BaseRepository implements UserInterface
{
    public function __construct(User $user)
    {
        parent::__construct($user);
    }
    public function firstOrNew($infomation)
    {
        $user = User::firstOrNew(['email'=>$infomation->email]);
        $user->name = $infomation->name;
        $user->email = $infomation->email;
        $user->password = bcrypt($infomation->password);
        $user->save();
    }
}
