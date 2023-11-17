import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import { Head, usePage, Link} from '@inertiajs/react';
import FlashMessage from '@/Components/FlashMessage';

  
export default function EmployeeList(props) {
    const { employees, flash } = usePage().props
  
    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("employees.destroy", e.currentTarget.id));
        }
    }
   console.log(props);
    return (
        <AuthenticatedLayout
            errors={props.errors}
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employee List</h2>}
        >
            <Head title="employees" />
            {flash.message && (
                <FlashMessage message={{type:flash.message.type , text:flash.message.info}}/> 
            )}
           
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("employees.create") }
                                >
                                    Add New Employee
                                </Link>
                            </div>
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">ID</th>
                                        <th className="px-4 py-2">First Name</th>
                                        <th className="px-4 py-2">Last Name</th>
                                        <th className="px-4 py-2">Gender</th>
                                        <th className="px-4 py-2">Birthdate</th>
                                        <th className="px-4 py-2">Monthly Salary</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map(({ id, firstname, lastname, gender, birthdate, monthly_salary }) => (
                                        <tr  key={id} >
                                            <td className="border px-4 py-2">{ id }</td>
                                            <td className="border px-4 py-2">{ firstname }</td>
                                            <td className="border px-4 py-2">{ lastname }</td>
                                            <td className="border px-4 py-2">{ gender ? 'Female' : 'Male' }</td>
                                            <td className="border px-4 py-2">{ birthdate }</td>
                                            <td className="border px-4 py-2">{ monthly_salary }</td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("employees.edit", id)}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
  
                                    {employees.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No Employee found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}