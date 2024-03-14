import React from "react";
import Image from "next/image";

const VideoStatusCard = () => {
    return (
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
    )
}

export default VideoStatusCard;