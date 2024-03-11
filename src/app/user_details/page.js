'use client'

import React, {useState} from "react";
import Link from "next/link";
import  Image  from 'next/image';

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const UserDetails = () => {

    const [team, setTeam] = useState('');
    const [event, setEvent] =useState('');
    const [isMobileCustomer, setIsMobileCustomer] = useState();
    const [isInternetCustomer, setIsInternetCustomer] = useState();

    const handleTeamSelection = (event) => {
        setTeam(event.target.value);
        console.log(team)
    }

    const handleEventSelection = (event) => {
        setEvent(event.target.value);
        console.log(event)
    }

    const handleMobileCustomerSelection = (event) => {
        setIsMobileCustomer(event.target.value);
        console.log(isMobileCustomer)
    }

    const handleInternetCustomerSelection = (event) => {    
        setIsInternetCustomer(event.target.value);
        console.log(isInternetCustomer)
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]">
                <Sidebar />
                <div className="max-w-[1100px] w-full">
                    <h3 className="font-bold text-4xl pb-4">User Details</h3>
                    <Link href='/users' className="border border-solid border-[red] text-[red] rounded px-3 py-2">
                        <ArrowBackOutlinedIcon />
                        Back to all users
                    </Link>
                    <div>
                        <form className='grid grid-cols-2 gap-5 pt-10'>
                        <div>
                            <TextField id="outlined-basic" label="User Id" variant="outlined" type="number" className='w-full' value={123123} disabled/>
            </div>
            <div>
                <TextField id="outlined-basic" label="Created At" variant="outlined" type="text" value={'03/03/2023'} className='w-full' disabled/>
            </div>
            <div>
                <TextField id="outlined-basic" label="First Name" variant="outlined" type="text" className='w-full'/>
            </div>
            <div>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" type="text" className='w-full'/>
            </div>
            <div>
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" className='w-full'/>
            </div>
            <div>
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="tel" className='w-full'/>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="team">Team</InputLabel>
                    <Select labelId="team" id="team" value={team} label="Team" onChange={handleTeamSelection}>
                        <MenuItem value='Team 1'>Team-1</MenuItem>
                        <MenuItem value='Team-2'>Team-2</MenuItem>
                        <MenuItem value='Team 3'>Team-3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="event">Event</InputLabel>
                    <Select labelId="event" id="event" value={event} label="Event" onChange={handleEventSelection}>
                        <MenuItem value='Event 1'>Event-1</MenuItem>
                        <MenuItem value='Event-2'>Event-2</MenuItem>
                        <MenuItem value='Event 3'>Event-3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="mobileCustomer">Veriozon Mobile Customer</InputLabel>
                    <Select labelId="mobileCustomer" id="mobileCustomer" value={isMobileCustomer} label="Verizon Mobile Customer" onChange={handleMobileCustomerSelection}>
                        <MenuItem value='Yes'>Yes</MenuItem>
                        <MenuItem value='No'>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="mobileCustomer">Veriozon Home Internet Customer</InputLabel>
                    <Select labelId="homeInternetCustomer" id="homeInternetCustomer" value={isInternetCustomer}label="Verizon Home Internet Customer" onChange={handleInternetCustomerSelection}>
                        <MenuItem value='Yes'>Yes</MenuItem>
                        <MenuItem value='No'>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <div>
                    <div className="flex gap-6">
                        <div className="flex flex-col justify-between">
                            <p>Video</p>
                            <div>
                                <Image src='/video.png' width={100} height={150}></Image>
                            </div>
                        </div>
                        <div className="font-light">
                            <div className="flex flex-col gap-2 pb-3">
                                <p className="text-xs">Opened Email?</p>
                                <p className="">Yes</p>
                                <p className="text-[red]">See Email</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-xs">Opened Website?</p>
                                <p>Yes</p>
                                <p className="text-[red]">See Website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-3 flex justify-between gap-5 pr-10'>
                    <Button className="border border-solid border-[red] text-[red] font-bold rounded-full py-3 px-6 min-w-[50%]">Delete User</Button>
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

export default UserDetails;