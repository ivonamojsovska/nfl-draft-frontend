import React from "react";
import Link from "next/link";

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

const Sidebar = () => {
    return (
        <div className="w-[10rem] h-[18.75rem] flex flex-col justify-around">
            <Link href='/users' className="flex items-center gap-2 px-4 py-2 hover:bg-[#FDE5E5] rounded">
                <SpaceDashboardIcon  />
                <p>Dashbord</p>
            </Link>
            <Link href='/users' className="flex items-center gap-2 px-4 py-2 hover:bg-[#FDE5E5] rounded">
                <PersonIcon />
                <p>Users</p>
            </Link>
            <Link href='/teams' className="flex items-center gap-2 px-4 py-2 hover:bg-[#FDE5E5] rounded">
                <GroupsOutlinedIcon />
                <p>Teams</p>
            </Link>
            <Link href='/videos' className="flex items-center gap-2 px-4 py-2 hover:bg-[#FDE5E5] rounded">
                <SlowMotionVideoOutlinedIcon />
                <p>Videos</p>
            </Link>
            <Link href='/events' className="flex items-center gap-2 px-4 py-2 hover:bg-[#FDE5E5] rounded">
                <PinDropOutlinedIcon />
                <p>Events</p>
            </Link>
            <Link href='/admin' className="flex items-center gap-2 px-4 py-2 hover:bg-[#FDE5E5] rounded">
                <BuildOutlinedIcon />
                <p>Admin</p>
           </Link>
        </div>
    )
}

export default Sidebar;

