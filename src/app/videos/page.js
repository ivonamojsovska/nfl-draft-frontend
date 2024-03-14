import React from "react"

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import VideosTable from "../../../components/VideosTable";
import AddNewDataBtn from "../../../components/AddNewDataBtn";

const Videos = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]">
                <Sidebar />
                <div className="max-w-[1100px] w-full">
                    <div className='flex items-center justify-between pb-6'>
                        <h3 className="font-bold text-4xl pb-4">All Videos</h3>
                        <AddNewDataBtn text="Video" />
                    </div>
                    <div>
                        <VideosTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos;