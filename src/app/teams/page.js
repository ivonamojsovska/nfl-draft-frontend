'use client'

import React from 'react'
import Link from 'next/link'

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import TeamsTable from '../../../components/TeamsTable';
import AddNewDataBtn from '../../../components/AddNewDataBtn';

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
                        <AddNewDataBtn text={'Team'} />
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
