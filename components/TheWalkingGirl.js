import videoSectionText from "../public/static/video-section-text";
import avatarText from "../public/assets/video-section/avatar-text.svg";
import Image from "next/image";
export const TheWalkingGirl = () => {
    return(
        <div className="sm:hidden md:hidden lg:hidden relative flex flex-row justify-end items-center min-h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source
                        src="/assets/video-section/avatar_video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

            <div className="flex flex-row justify-center">
                <div className="z-30 flex md:justify-end justify-end pr-48">
                    <div className="w-1/2">
                        <div className="flex flex-row justify-end mb-5">
                            <Image src={avatarText} alt="Avatar Text" />
                        </div>
                        <div className="bg-gradient-content-card text-white rounded-xl p-6">
                            {videoSectionText.map((el, i) =>
                                <div className="mt-10" key={i}>
                                    <div className="flex items-center">
                                        <Image src={el.path} alt={el.title} />
                                        <span className="ml-6 text-base md:text-2xl font-black">{el.title}</span>
                                    </div>
                                    <div className="mt-4 ">
                                        <span className="text-base">
                                            {el.text}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}