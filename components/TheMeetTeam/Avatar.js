import teamAvatar from "../../public/static/team-avatar";
import Image from "next/image";

const Avatar = () => {
    return(
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
    )
}
export default Avatar;