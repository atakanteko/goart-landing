import Logo from './TheMoveToEarn/Logo';
import SocialNavbar from './TheMoveToEarn/SocialNavbar';
import MobileStoreIcons from './TheMoveToEarn/MobileStoreIcons';
import MoveToEarnText from './TheMoveToEarn/MoveToEarnText';

export const TheMoveToEarn = () => {
    return (
        <div className={`sm:bg-top sm:bg-resp-home-cover sm:px-6
                         md:bg-right md:bg-home md:px-6
                         px-2 h-screen bg-cover bg-home-cover relative overflow-hidden`}>
            <div className="sm:mx-1 sm:flex sm:flex-col
                            md:mx-1 md:flex md:flex-col
                            mx-192">
                <div className="flex justify-between items-start">
                    <Logo />
                    <SocialNavbar />
                </div>
                <MoveToEarnText />
                <MobileStoreIcons />
            </div>
        </div>
    )
}
