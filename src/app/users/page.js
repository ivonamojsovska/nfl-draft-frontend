import React from 'react'
import Image from 'next/image'

import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

const Users = () => {
    return (
        <div className=''>
            <div>
                <Header/>
            </div>
            <div>
                <Sidebar/>
            </div>
        </div>

    )
}

export default Users