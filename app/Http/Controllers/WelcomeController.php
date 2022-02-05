<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;


class WelcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        return view("Welcome", [
            'products' => Product::paginate(6)
        ]);
    }
}