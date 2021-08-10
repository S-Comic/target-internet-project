<?php

namespace App\Http\Request;

use Illuminate\Http\Request;

class logicController extends Controller
{
    public function test()
    {
        return view(view: 'about');
    }
}