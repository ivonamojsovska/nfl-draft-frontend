'use client';

import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {

    // State to store the input value
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Event handler to update the state on input change
    const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Username and Password', username, password);
        setUsername('');
        setPassword('');
    }


    
    return (
        <div className='center w-[28.75rem] p-[2.5rem] flex flex-col gap-5 border border-solid border-1 rounded'>
            <div>
                <h1 className='font-bold text-3xl'>Sign In</h1>
            </div>
            <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
                <TextField id="outlined-basic" label="Username" variant="outlined" value={username} required onChange={handleUsernameChange} />
                <TextField id="outlined-basic" label="Password" variant="outlined" required value={password} onChange={handlePasswordChange}/>
                <div>
                    <Button className='bg-black text-white p-3 w-full rounded-full' type='submit'>
                    Continue
                </Button>
                </div>
            </form>   
        </div>
    );
}   
    
    export default Login;
