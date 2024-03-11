'use client';
import  React, {useState} from 'react'
import { useRouter } from 'next/navigation';

import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'


import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const AddUser = () => {
    const router = useRouter();

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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        router.push('/user_details');
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]'>
                <Sidebar />
                <div className='w-full max-w-[1100px]'>
                    <h3 className='font-bold text-4xl pb-6'>Add User</h3>
                    <form className='grid grid-cols-2 gap-5' onSubmit={handleFormSubmit}>
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
                                <Select labelId="team" id="team" value={team}label="Team" onChange={handleTeamSelection}>
                                    <MenuItem value='Team 1'>Team-1</MenuItem>
                                    <MenuItem value='Team-2'>Team-2</MenuItem>
                                    <MenuItem value='Team 3'>Team-3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="event">Event</InputLabel>
                                <Select labelId="event" id="event" value={event}label="Team" onChange={handleEventSelection}>
                                    <MenuItem value='Event 1'>Event-1</MenuItem>
                                    <MenuItem value='Event-2'>Event-2</MenuItem>
                                    <MenuItem value='Event 3'>Event-3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="mobileCustomer">Veriozon Mobile Customer</InputLabel>
                                <Select labelId="mobileCustomer" id="mobileCustomer" value={isMobileCustomer}label="Verizon Mobile Customer" onChange={handleMobileCustomerSelection}>
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
                        <div className='w-[50%]'>
                          <Button className="bg-white text-black px-3 py-2 border border-solid border-black w-full rounded-full mt-2 hover:bg-black hover:text-white" type='submit'>
                            Save User
                          </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default AddUser