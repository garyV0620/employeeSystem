import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
  
export default function Dashboard(props) {
  
    const { employee } = usePage().props;
    const { data, setData, put, errors } = useForm({
        firstname:  employee.firstname || "",
        lastname:  employee.lastname || "",
        gender:  employee.gender,
        birthdate:  employee.birthdate || "",
        monthly_salary:  employee.monthly_salary || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("employees.update", employee.id));
    }
  
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Employee</h2>}
        >
            <Head title="Employees" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("employees.index") }
                                >
                                    Back
                                </Link>
                            </div>
  
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">First Name</label>
                                        <input
                                            type="text"
                                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            label="firstname"
                                            name="firstname"
                                            value={data.firstname}
                                            onChange={(e) =>
                                                setData("firstname", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.firstname}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Last Name</label>
                                        <input
                                            type="text"
                                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            label="lastname"
                                            name="lastname"
                                            value={data.lastname}
                                            onChange={(e) =>
                                                setData("lastname", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.lastname}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Male</label>
                                        <input
                                            type="radio"
                                            className="mx-2"
                                            label="gender"
                                            name="gender"
                                            value="0"
                                            checked={data.gender == 0}
                                            onChange={(e) =>
                                                setData("gender", e.target.value)
                                            }
                                        />
                                        <label className="ml-5">Female</label>
                                        <input
                                            type="radio"
                                            className="mx-2"
                                            label="gender"
                                            name="gender"
                                            value="1"
                                            checked={data.gender == 1}
                                            onChange={(e) =>
                                                setData("gender", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.gender}
                                        </span>
                                    </div>
                                    
                                    <label className="">Birthdate</label>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker 
                                            format="YYYY-MM-DD"
                                            value={dayjs(data.birthdate)}
                                            onChange={(date) => 
                                                {
                                                    let dateOnly = new Date(date)
                                                    setData('birthdate',dateOnly.toISOString().split('T')[0])
                                                }
                                            }
                                            />
                                        </LocalizationProvider>
                                    </div>
                                    <span className="text-red-600 mb-4">
                                        {errors.birthdate}
                                    </span>

                                    <div className="mb-4">
                                        <label className="">Monthly Salary</label>
                                        <input
                                            type="number"
                                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            label="monthly_salary"
                                            name="monthly_salary"
                                            value={data.monthly_salary}
                                            onChange={(e) =>
                                                setData("monthly_salary", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.monthly_salary}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
  
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}