import Image from "next/image";
import { memo, useEffect, useState } from "react";
import IconDisplay from "./IconDisplay";


const HomeScreenJoinButtons = () => {
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

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        },[] ); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    if (size.width < 376) {
        return (
            <div className="z-30 ml-6">
                <IconDisplay width={150} height={40} type="sm"/>
            </div>
        )
    } else if (size.width < 568) {
        return (
            <div className="mt-1 z-30 md:ml-6">
                <IconDisplay width={200} height={50} type="md"/>
            </div>
        )
    } else if (size.width < 906) {
        return (
            <div className="mt-16 z-30 lg:ml-6">
                <IconDisplay width={200} height={50} type="lg"/>
            </div>
        )
    } else {
        return(


            <div className="mb-32 z-30 ml-192 flex">
                {icons.map((item, i) => {
                    return (
                        <div key={i} className="bg-home-page-btn-bg py-2 px-4 rounded-md  h-14 flex flex-row items-center mr-4 last:mr-0">
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
}

export default memo(HomeScreenJoinButtons);
