import Logo from './TheMoveToEarn/Logo';
import SocialNavbar from './TheMoveToEarn/SocialNavbar';
import HomeScreenJoinButtons from './TheMoveToEarn/HomeScreenJoinButtons';
import MoveToEarnText from './TheMoveToEarn/MoveToEarnText';

export const TheMoveToEarn = () => {
    return (
        <div className={`sm:bg-center
                         md:bg-center 
                         lg:bg-center
                         h-screen relative overflow-hidden`}>
            <div className="sm:flex sm:flex-col sm:h-screen
                            md:flex md:flex-col md:h-screen
                            lg:flex lg:flex-col lg:h-screen
                            xl:flex xl:flex-col xl:justify-between xl:h-screen
                            xl:relative sm:relative md:relative lg:relative
                            relative h-screen overflow-hidden
                            ">
                <div className="flex justify-between items-start">
                    <Logo />
                    <SocialNavbar />
                </div>
                <MoveToEarnText />
                <HomeScreenJoinButtons />
                <video
                    autoPlay
                    loop
                    muted
                    className="xl:absolute xl:z-10 xl:w-auto xl:min-w-full xl:min-h-full xl:max-w-none xl:scale-150
                               sm:absolute sm:z-10 sm:w-auto sm:min-w-full sm:min-h-full sm:max-w-none sm:scale-150
                               md:absolute md:z-10 md:w-auto md:min-w-full md:min-h-full md:max-w-none md:scale-150
                               lg:absolute lg:z-10 lg:w-auto lg:min-w-full lg:min-h-full lg:max-w-none lg:scale-150
                               ">
                    <source
                        src="/assets/images/website-first-screen/mte_anasayfa_video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>


        </div>
    )
}
