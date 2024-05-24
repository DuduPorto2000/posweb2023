<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonagemModel extends Model
{
    protected $table = "personagens";
    protected $primaryKey = "id";
    protected $fillable = ["nome","raridade","caminho","elemento","faccao"];
}
