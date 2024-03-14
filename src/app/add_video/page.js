'use client'
import React, {useState} from "react"
import Button from "@mui/material/Button";

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";


const AddVideo = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(file);
    }
    
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='flex gap-[4.376rem] pt-[2.5rem] px-[1.875rem]'>
                <Sidebar />
                <div className='w-full max-w-[1100px]'>
                    <h3 className='font-bold text-4xl pb-6'>Add Video</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input accept="video/*" id="contained-button-file" type="file" style={{ display: 'none' }} onChange={handleFileChange}/>
                            <label htmlFor="contained-button-file">
                                <Button component="span" className="border border-solid border-[red] text-[red] rounded px-3 py-2">
                                    Upload Video
                                </Button>
                            </label>
                        </div>
                        <div className='mt-7'>
                            <Button className='text-black bg-white p-3 border border-solid border-black rounded-full py-5 px-[4.5rem] font-bold' type='submit'>
                                Save Video
                            </Button>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    )
}

export default AddVideo;