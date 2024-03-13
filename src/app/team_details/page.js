'use client'

import React, {useState} from 'react';
import { MuiColorInput } from 'mui-color-input'

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import BackToAllBtn from '../../../components/BackToAllButton';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TeamDetails = () => {
    const [file, setFile] = useState(null);
    const [colorPrimary, setColorPrimary] = useState('#ffffff')
    const [colorSecondary, setColorSecondary] = useState('#000000')


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handlePrimaryValueChange = (newValue) => {
        setColorPrimary(newValue)
    }

    const handleSecondaryValueChange = (newValue) => {
        setColorSecondary(newValue)
    }
    
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]'>
                <Sidebar />
                <div className='w-full max-w-[1100px]'>
                    <h3 className='font-bold text-4xl pb-6'>Team Details</h3>
                    <BackToAllBtn text='Teams' />
                    <div>
                        <form className='grid grid-cols-2 gap-5 pt-10'>
                            <div>
                                <TextField id="outlined-basic" label="Location" variant="outlined" type="text" className='w-full'/>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Team Name" variant="outlined" type="text" className='w-full'/>
                            </div>
                            <div className='col-span-2'>
                                <TextField id="outlined-basic" label="Mascot" variant="outlined" type="text" className='w-full'/>
                            </div>
                            <div>
                                <div>
                                    <p className='py-4 text-[#000000DE]'>Team Logo</p>
                                </div>
                                <div>
                                    <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button component="span" className="border border-solid border-[red] text-[red] rounded px-3 py-2">
                                            Upload Image
                                        </Button>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className='py-4'>Colors</p>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <MuiColorInput format="hex" value={colorPrimary} onChange={handlePrimaryValueChange} />
                                    </div>
                                    <div>
                                        <MuiColorInput format="hex" value={colorSecondary} onChange={handleSecondaryValueChange} />
                                    </div>
                                </div> 
                            </div>
                            <div className='mt-5'>
                                <Button className='text-black bg-white p-3 border border-solid border-black w-full rounded-full max-w-[50%]' type='submit'>
                                    Save Team
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamDetails;