'use client'

import React from 'react'
import Link from 'next/link'

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import TeamsTable from '../../../components/TeamsTable';

const Teams = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]'>
                <Sidebar/>
                <div className='w-full max-w-[1100px]'>
                    <div className='flex items-center justify-between pb-6'>
                        <h3 className='font-bold text-4xl'>All Teams</h3>
                        <Link href="/team_details" className='px-6 py-4 border border-1 border-black rounded-full font-bold text-base'>Add Team</Link>
                    </div>
                    <div>
                        <TeamsTable />
                    </div>
                </div>
            </div>
        </div>
    
        )
}

export default Teams;
