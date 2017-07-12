<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Response;


class UserController extends Controller
{

    /**
     * Return current user.
     *
     * @param User $user
     * @return User
     */
    public function show(User $user)
    {
        return $user;
    }
    /**
     * Generate JSON Web Token.
     */
    protected function createToken($user)
    {
        $payload = [
            'sub' => $user->id,
            'iat' => time(),
            'exp' => time() + (2 * 7 * 24 * 60 * 60)
        ];
        return JWT::encode($payload, Config::get('app.token_secret'));
    }
    /**
     * Get signed in user's profile.
     */
    public function getUser(Request $request)
    {
        $user = User::find($request['user']['sub']);
        return $user;
    }
    /**
     * Update signed in user's profile.
     */
    public function updateUser(Request $request)
    {
        $user = User::find($request['user']['sub']);
        $user->displayName = $request->input('displayName');
        $user->email = $request->input('email');
        $user->save();
        $token = $this->createToken($user);
        return response()->json(['token' => $token]);
    }

//    public function checkUser(Request $request, $displayname)
//    {
//        //get all users
//        //get all emails
//        //get input data
//        //return true if given email is in the emails array
//
//        $db = array_flatten(User::get(['displayname'])->toArray()) ;
//        $result =  in_array($displayname, $db);
//        if($result) {
//            return Response::json(array('isUnique' => $result), 200);
//        }
//        else{
//            abort('404');
//        }
//    }
}
