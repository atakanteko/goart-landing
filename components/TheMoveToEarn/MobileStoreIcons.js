import playStoreIcons from "../../static/play-store-icons";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import log from "tailwindcss/lib/util/log";


const MobileStoreIcons = () => {
    const [screenSize, setScreenSize] = useState(null);
    useEffect(()=> {
        window.addEventListener("resize", getScreenSize);
        return () => {
            window.removeEventListener("resize", getScreenSize);
        }
    })
    const getScreenSize = () => {
        setScreenSize(window.innerWidth);
    }
    if (screenSize < 376) {
        return(
            <div className="sm:flex sm:flex-row sm:mt-mobile-icons-space-sm">
                {playStoreIcons.map((element, i) =>
                    <div className="sm:mr-mobile-icons-responsive-margin-right sm:last:mr-0"
                         key={i}>
                        <Image src={element.path}
                               alt={element.alt}
                               width={150}
                               height={40}
                        />
                    </div>
                )}
            </div>
        )
    } else if (screenSize < 568) {
        return(
            <div className="md:flex md:flex-row md:mt-mobile-icons-space ">
                {playStoreIcons.map((element, i) =>
                    <div className="md:mr-mobile-icons-responsive-margin-right md:last:mr-0"
                         key={i}>
                        <button>
                            <Image src={element.path}
                                   alt={element.alt}
                                   width={150}
                                   height={40}
                            />
                        </button>
                    </div>
                )}
            </div>
        )
    } else if (screenSize < 906) {
        return(
            <div className="lg:flex lg:flex-row lg:mt-mobile-icons-space ">
                {playStoreIcons.map((element, i) =>
                    <div className="md:mr-mobile-icons-responsive-margin-right md:last:mr-0"
                         key={i}>
                        <button>
                            <Image src={element.path}
                                   alt={element.alt}
                                   width={150}
                                   height={40}
                            />
                        </button>
                    </div>
                )}
            </div>
        )
    } else {
        return(
            <div className="mt-44">
                {playStoreIcons.map((element, i) =>
                    <div className="inline mr-62 last:mr-0" key={i}>
                        <Image src={element.path}
                               alt={element.alt}
                        />
                    </div>
                )}
            </div>
        )
    }



}

export default memo(MobileStoreIcons);
