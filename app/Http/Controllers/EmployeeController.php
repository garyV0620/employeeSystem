<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::all();
        return Inertia::render('Employees/Index', ['employees' => $employees]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Employees/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeRequest $employeeRequest)
    {
        $validated = $employeeRequest->validated();
        $employee = Employee::create($validated);
        return redirect(route(('employees.index')))->with('message', ['type' => 'success', 'info' => 'Employee Add successfully!']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        return Inertia::render('Employees/Edit', [
            'employee' => $employee
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeRequest $employeeRequest, Employee $employee)
    {
        $validated = $employeeRequest->validated();
        $employee->update($validated);
        return redirect(route(('employees.index')))->with('message', ['type' => 'success', 'info' => $employee->name .' has been Updated successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();
        return redirect(route(('employees.index')))->with('message', ['type' => 'success', 'info' => 'Employee '.$employee->firstname.' has been Deleted successfully!']);
    }
}
