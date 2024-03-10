'use client'

import React from 'react'
import Link from 'next/link'

import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

import UserTable, { EnhancedTable } from '../../../components/UsersTable'

const Users = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className='flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]'>
                <Sidebar/>
                <div className='w-full'>
                    <div className='flex items-center justify-between pb-6'>
                        <h3 className='font-bold text-4xl'>All Users</h3>
                        <Link href="/add_user" className='px-6 py-4 border border-1 border-black rounded-full font-bold text-base'>Add User</Link>
                    </div>
                    <div>
                        <EnhancedTable />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Users