'use client'

import React from 'react'
import Link from 'next/link'

import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

import { EnhancedTable } from '../../../components/UsersTable'

const Users = ({headCells}) => {
    const headCellsProps = headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'First Name',
        },
        {
            id: 'lastName',
            numeric: false,
            disablePadding: false,
            label: 'Last Name',
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: false,
            label: 'Email',
        },
        {
            id: 'phoneNumber',
            numeric: true,
            disablePadding: false,
            label: 'Phone Number',
        },
        {
            id: 'team',
            numeric: false,
            disablePadding: false,
            label: 'Team',
        },
        {
            id: 'mobileCustomer',
            numeric: false,
            disablePadding: false,
            label: 'Mobile Customer',
        },
        {
            id: 'internetCustomer',
            numeric: false,
            disablePadding: false,
            label: 'Internet Customer',
        },
    ];

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className='flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]'>
                <Sidebar/>
                <div className='w-full max-w-[1100px]'>
                    <div className='flex items-center justify-between pb-6'>
                        <h3 className='font-bold text-4xl'>All Users</h3>
                        <Link href="/add_user" className='px-6 py-4 border border-1 border-black rounded-full font-bold text-base'>Add User</Link>
                    </div>
                    <div>
                        <EnhancedTable headCells={headCells}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users