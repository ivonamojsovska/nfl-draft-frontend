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

function useFormInput(initialValue) {
    const [value, setValue] = React.useState(initialValue);
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return {
        value,
        onChange: handleChange,
    };
}


const AddUser = () => {
    const router = useRouter();

    const firstName = useFormInput('');
    const lastName = useFormInput('');
    const email = useFormInput('');
    const phone = useFormInput('');
    const team = useFormInput('');
    const event = useFormInput('');
    const isMobileCustomer = useFormInput('');
    const isInternetCustomer = useFormInput('');


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            team,
            event,
            isMobileCustomer,
            isInternetCustomer,
            email,
            phone
        }

        console.log(formData)
        
        try {
            const response = await fetch('http://localhost:8000/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // User successfully added
                console.log('User added successfully');
            } else {
                // Handle error
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Failed to add user:', error.message);
        }

        // router.push(`/user_detatails/${data.user_id}`);
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
                            <TextField id="outlined-basic" label="First Name" variant="outlined" type="text" className='w-full' value={firstName} {...firstName}/>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" type="text" className='w-full' value={lastName} {...lastName}/>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" className='w-full' value={email} {...email}/>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="tel" className='w-full' value={phone} {...phone}/>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="team">Team</InputLabel>
                                <Select labelId="team" id="team" value={team} label="Team" {...team}>
                                    <MenuItem value='Team 1'>Team-1</MenuItem>
                                    <MenuItem value='Team-2'>Team-2</MenuItem>
                                    <MenuItem value='Team 3'>Team-3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="event">Event</InputLabel>
                                <Select labelId="event" id="event" value={event} label="Event" {...event}>
                                    <MenuItem value='Event 1'>Event-1</MenuItem>
                                    <MenuItem value='Event-2'>Event-2</MenuItem>
                                    <MenuItem value='Event 3'>Event-3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="mobileCustomer">Veriozon Mobile Customer</InputLabel>
                                <Select labelId="mobileCustomer" id="mobileCustomer" value={isMobileCustomer}label="Verizon Mobile Customer" {...isMobileCustomer}>
                                    <MenuItem value='Yes'>Yes</MenuItem>
                                    <MenuItem value='No'>No</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="mobileCustomer">Veriozon Home Internet Customer</InputLabel>
                                <Select labelId="homeInternetCustomer" id="homeInternetCustomer" value={isInternetCustomer} label="Verizon Home Internet Customer" {...isInternetCustomer}>
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