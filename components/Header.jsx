import * as React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='w-full h-32 bg-black flex justify-between items-center px-11'>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-[2px] font-bold text-3xl'>
                    <h1 className='text-white'>Ener<span className="text-[red]">jerseys</span></h1>
                    <div>
                        <Image src='/logo.png' alt='Logo' width={25} height={25} />
                    </div> 
                </div>
                <div>
                    <p className='text-white font-light'>Admin Panel</p>
                </div>
            </div>
            <div className='flex items-center'>
                <Image src='/logo.png' alt='Logo' width={25} height={30} /> 
            </div>
        </div>
);}

export default Header;