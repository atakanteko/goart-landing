import playStoreIcons from "../../public/static/play-store-icons";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import IconDisplay from "./IconDisplay";


const MobileStoreIcons = () => {
    const [screenSize, setScreenSize] = useState(907);
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
        return (
            <div className="mt-342">
                <IconDisplay width={150} height={40} type="sm"/>
            </div>
        )
    } else if (screenSize < 568) {
        return (
            <div className="mt-40">
                <IconDisplay width={200} height={50} type="md"/>
            </div>
        )
    } else if (screenSize < 906) {
        return (
            <div className="mt-40">
                <IconDisplay width={200} height={50} type="lg"/>
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
