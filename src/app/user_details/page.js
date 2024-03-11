'use client'

import React, {useState} from "react";
import Link from "next/link";

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
                <div className="w-full">
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
                    <p>Video</p>
                    <div>Video</div>
                </div>
                <div>
                    <div>
                        <p>Opened Email?</p>
                        <p>Yes</p>
                        <p>See Email</p>
                    </div>
                    <div>
                        <p>Opened Website?</p>
                        <p>Yes</p>
                        <p>See Website</p>
                    </div>
                </div>
            </div>
            <div className='hidden'>
                <Button>Delete User</Button>
                <Button className="bg-white text-black px-3 py-2 border border-solid border-black w-full rounded-full mt-2 hover:bg-black hover:text-white" type='submit'>
                            Save User
                </Button>
                
            </div>
        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;