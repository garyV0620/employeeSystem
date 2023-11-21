import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import { Head, usePage, Link} from '@inertiajs/react';

  
export default function EmployeeList(props) {
    const { employeeSummary } = usePage().props
  
    return (
        <AuthenticatedLayout
            errors={props.errors}
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employee Summary</h2>}
        >
            <Head title="employees summary" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div className="bg-white py-24 sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                                {employeeSummary.map((summary) => (
                                    <div key={summary.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                    <dt className="text-base leading-7 text-gray-600">{summary.label}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                        {summary.value}
                                    </dd>
                                    </div>
                                ))}
                                </dl>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}