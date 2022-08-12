<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expedient extends Model
{
    use HasFactory;
    protected $fillable = ['codigo', 'descripcion', 'procedimiento', 'dependencias', 'empleado', 'archivo', 'tipo', 'fase'];
}
