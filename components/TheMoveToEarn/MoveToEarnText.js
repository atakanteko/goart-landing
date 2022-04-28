import Image from "next/image";
import moveToEarn from "../../public/assets/images/website-first-screen/move-to-earn-text.svg";
import moveToEarnMobile from "../../public/assets/images/website-first-screen/move-to-earn-mobile-text.svg";
import {useEffect, useState} from "react";

const MoveToEarnText = () => {
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
            <>
                <div className="mt-margin-top-for-sm-mobile mb-12 z-30 ml-6">
                    <Image src={moveToEarnMobile} alt="Move To Earn" className="mt-3" />
                </div>
            </>
        )
    } else if (size.width < 568) {
        return (
            <>
                <div className="mt-margin-top-for-md-mobile mb-12 md:ml-6 z-30">
                    <Image src={moveToEarnMobile} alt="Move To Earn" className="mt-3" />
                </div>
            </>
        )
    } else if (size.width < 906) {
        return (
            <>
                <div className="mt-margin-top-for-lg-mobile lg:ml-6 z-30">
                    <Image src={moveToEarn} alt="Move To Earn" className="mt-3" />
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="z-30 ml-192">
                    <Image src={moveToEarn} alt="Move To Earn" className="mt-3" />
                </div>
            </>
        )
    }
}

export default MoveToEarnText;
