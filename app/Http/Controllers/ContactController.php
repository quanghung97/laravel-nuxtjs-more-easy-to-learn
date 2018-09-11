<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Resources\Contact as ContactResource;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function __construct()
    {
        return $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = request()->user()->contacts;

        return ContactResource::collection($contacts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $contact = $request->user()->contacts()->create($request->all());

        return ContactResource::collection($contact);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        if ($request->user()->id !== $contact->user_id) {
            return response()->json(['error' => 'Unauthorized action'], 401);
        } else {
            $contact->create($request->all());

            return new ContactResource($contact);
        }
    }

    public function show(Contact $contact)
    {
        return new ContactResource($contact);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        if (request()->user()->id !== $contact->user_id) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $contact = $contact->delete();

        return response()->json(null, 200);
    }
}
