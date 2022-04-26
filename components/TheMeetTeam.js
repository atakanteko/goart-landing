import Image from "next/image";
import teamAvatar from "../public/static/team-avatar";
export const TheMeetTeam = () => {
    return(
        <div className="h-max bg-[#181819] flex flex-col sm:px-6 items-center">
            <h1 className="text-2xl text-white font-bold leading-10">Meet Our Team</h1>
            <div className="mt-4 grid gap-x-16 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-6">
                {teamAvatar.map((avatar, index) => {
                    return(
                    <div className="flex flex-col items-center mb-16" key={index}>
                        <div className="w-20 h-20 rounded-full z-50 overflow-hidden ">
                            <Image src={avatar.path}
                                   alt="Team 1"
                                   width={200}
                                   height={200} />
                        </div>
                        <div className="text-meet-our-team-name-color text-xs leading-4 font-medium mt-4">{avatar.name}</div>
                        <div className="text-primary-300 text-xs leading-4 font-medium">{avatar.title}</div>
                    </div>
                )
                })}
            </div>
        </div>
    )
}