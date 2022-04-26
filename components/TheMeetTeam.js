import Avatar from "./TheMeetTeam/Avatar";

export const TheMeetTeam = () => {
    return(
        <div className="h-max bg-[#181819] flex flex-col sm:px-6 md:px-6 lg:px-6 px-6 items-center">
            <h1 className="text-2xl text-white font-bold leading-10 mt-4">Meet Our Team</h1>
            <Avatar />
        </div>
    )
}