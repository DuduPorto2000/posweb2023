<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PersonagemModel;
use Illuminate\Http\Request;

class PersonagensController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('index', ['personagens' => PersonagemModel::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        PersonagemModel::create(['nome' => $request->input('nome'),
        'raridade' =>  $request->input("raridade"),
        'caminho' => $request->input("caminho"),
        'elemento' => $request->input("elemento"),
        'faccao' => $request->input("faccao")]);
        return  redirect()->route('index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $personagem = PersonagemModel::find($id);
        return view('show', ['personagem' => $personagem]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $personagem = PersonagemModel::find($id);
        return view('edit', ['personagem' => $personagem]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $personagem = PersonagemModel::find($id);
        $personagem->update(['nome'=> $request->input('nome'),
        'raridade'=> $request->input('raridade'),
        'caminho'=> $request->input('caminho'),
        'elemento'=> $request->input('elemento'),
        'faccao'=> $request->input('faccao')]);
        return redirect()->route('index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(string $id)
    {
        $personagem = PersonagemModel::find($id);
        return view('delete', ['personagem' => $personagem]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $personagem = PersonagemModel::find($id);
        $personagem->delete();
        return redirect()->route('index');
    }
}
