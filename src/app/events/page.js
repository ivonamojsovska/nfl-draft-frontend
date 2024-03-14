import React from "react"

import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"
import AddNewDataBtn from "../../../components/AddNewDataBtn"
import EventsTable from "../../../components/EventsTable"

const Events = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]'>
                <Sidebar/>
                <div className='w-full max-w-[1100px]'>
                    <div className='flex items-center justify-between pb-6'>
                        <h3 className='font-bold text-4xl'>All Events</h3>
                        <AddNewDataBtn text={'Event'} />
                    </div>
                    <div>
                       <EventsTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events