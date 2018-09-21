<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Repositories\Facades\UserRepository;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'name' => 'required',
            'password' => 'required'
        ]);

        UserRepository::firstOrNew($request);

        $guzzle = new Client;
        //create token for user
        $response = $guzzle->post(url('oauth/token'), [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => 'ElLyLtBPxqTRAb9nMWiUc0JOMvLT2oihFhpLoBKp',
                'username' => $request->email,
                'password' => $request->password,
                'scope' => '',
            ],
        ]);

        return response(['data' => json_decode((string) $response->getBody(), true), 'email' => $user->email, 'userName' => $user->name]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = UserRepository::where('email', $request->email)->first();
        if (!$user) {
            return response(['status' => 'error', 'message' => 'User not found']);
        } elseif (Hash::check($request->password, $user->password)) {
            $guzzle = new Client;

            $response = $guzzle->post(url('oauth/token'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => '2',
                    'client_secret' => 'ElLyLtBPxqTRAb9nMWiUc0JOMvLT2oihFhpLoBKp',
                    'username' => $request->email,
                    'password' => $request->password,
                    'scope' => '',
                ],
            ]);

            return response(['data' => json_decode((string) $response->getBody(), true), 'email' => $user->email, 'userName' => $user->name]);
        }
    }
}
