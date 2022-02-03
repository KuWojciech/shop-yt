<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        return view ("products.index", [
            'products' => Product::paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(): View
    {
        return view ("products.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $product = new Product($request->all());
        $product->save();
        return redirect(route('products.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  Product  $product
     * @return View
     */
    public function show(product $product):View
    {
        return view ("products.show " , [
        'product' => $product 
         ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Product  $product
     * @return View
     */
    public function edit(product $product): View
    {
                return view ("products.edit", [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  Product  $product
     * @return RedirectResponse]
     */
    public function update(Request $request, Product $product):RedirectResponse
    {
        $product->fill($request->all());
        $product->save();
        return redirect(route('products.index'));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Product  $product
     * @return JsonResponse
     */
    public function destroy(product $product)
    {
        
        try {
            $user->delete();
            return response()->json([
            'status' => 'succes'
        ]);
        } catch (Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => 'wystąpił błąd!'
            ])->setStatusCode(500);
            }
        }
    }
    