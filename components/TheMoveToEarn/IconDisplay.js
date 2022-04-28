import homeScreenJoinButtons from "../../public/static/home-screen-join-buttons";
import Image from "next/image";
import {memo, useMemo} from "react";

const IconDisplay = ({type,width,height}) => {
    const mob = type

    const icons = [
        {
            path: "/assets/images/website-first-screen/discord.svg",
            alt: 'JOIN DISCORD',
        },
        {
            path:  "/assets/images/website-first-screen/Telegram.svg",
            alt: 'JOIN TELEGRAM',
        },
    ];
    return(
        <div key={index} className="flex flex-row">
            {icons.map((item, index) => {
            return (
                <div key={index} className="bg-home-page-btn-bg py-2 px-2 rounded-md w-38 h-10 flex flex-row items-center mr-4 last:mr-0">
                    <Image
                        src={item.path}
                        alt={item.alt}
                        width={20}
                        height={20}
                    />
                    <span className="text-sm font-medium text-white ml-3">{item.alt}</span>
                </div>
                )
            })}
        </div>

    )
}

export default memo(IconDisplay);
