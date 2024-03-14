'use client'
import React, {useState} from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import BackToAllBtn from '../../../components/BackToAllButton'
import VideoStatusCard from '../../../components/VideoStatusCard'

const VideoDetails = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]">
                <Sidebar />
                <div className="max-w-[1100px] w-full">
                    <h3 className="font-bold text-4xl pb-4">Video Details</h3>
                    <BackToAllBtn text="Videos" />
                    <div>
                        <form className='grid grid-cols-2 gap-5 pt-10'>
                        <div>
                                <TextField id="outlined-basic" label="Video Id" variant="outlined" type="number" className='w-full' value={123123} disabled/>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Created At" variant="outlined" type="text" value={'03/03/2023'} className='w-full' disabled/>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="User ID" variant="outlined" type="text" className='w-full'/>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Video URL" variant="outlined" type="text" className='w-full'/>
                            </div>
                            <div>
                                <div>
                                    <VideoStatusCard />
                                </div>
                                <div className='mt-3 flex justify-between gap-5 pr-10'>
                                    <Button className="border border-solid border-[red] text-[red] font-bold rounded-full py-3 px-6 min-w-[50%]">Delete Video</Button>
                                    <Button className="border border-solid border-black text-black font-bold rounded-full w-full py-3 px-6 min-w-[50%]">Save Edits</Button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails;